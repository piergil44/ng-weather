import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { LabelValue } from '@shared/components/autocomplete/models/label-value.model';
import { debounceTime, distinctUntilChanged, take, takeUntil, tap } from 'rxjs/operators';
import { AutoUnsubscribe } from '@core/components/auto-unsubscribe.component';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent extends AutoUnsubscribe implements OnInit, AfterViewInit {
  @Input() placeholder: string = '';
  @Input() value: LabelValue;
  @Input() disabled: boolean;
  @Input() minTermLength?: number;
  @Input() itemTemplate?: TemplateRef<any>;
  @Input() searchMethod?: (
    search: string,
  ) => Observable<LabelValue[]>;
  @Input() options?: Observable<LabelValue[]>;

  @Output() valueChange: EventEmitter<LabelValue> = new EventEmitter<LabelValue>();

  @ViewChild('input') input;

  isSelectBoxOpen = false;
  localOptions?: LabelValue[] = [];
  filteredList: LabelValue[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this._initValue();
    this._initLocalOptions();
  }

  ngAfterViewInit() {
    this._initInputListener();
  }

  onSelect(item: LabelValue) {
    this.value = item;
    this.valueChange.emit(item);
    this.isSelectBoxOpen = false;
  }

  /**
   * Filter Options method. Check input and exec filter
   * @private
   */
  private _filterOptions() {
    this.filteredList = [];
    if (!this.value.label || this.value.label.length < this.minTermLength) {
      this.isSelectBoxOpen = false;
      return;
    }

    if (this.searchMethod) {
      this.searchMethod(this.value.label)
        .pipe(takeUntil(this.destroy$))
        .subscribe((options) => {
          this.filteredList = options;
          this._showDropdown();
        });
      return;
    }

    this.filteredList = this.localOptions.filter((item) => item.label.toLowerCase().indexOf(this.value.label.toLowerCase()) >= 0);
    this._showDropdown();
  }

  private _showDropdown() {
    if (this.filteredList.length > 0) {
      this.isSelectBoxOpen = true;
      return;
    }

    this.isSelectBoxOpen = false;
  }

  /**
   * Cache all items in localOptions
   * @private
   */
  private _initLocalOptions() {
    if (this.options) {
      this.options
        .pipe(take(1))
        .subscribe((options) => {
          this.localOptions = options;
        });
    }
  }

  /**
   * Start to listen on keyup of input element
   * @private
   */
  private _initInputListener() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this._filterOptions();
        }),
      ).subscribe();
  }

  private _initValue() {
    if (!this.value) {
      this.value = {};
    }
  }
}
