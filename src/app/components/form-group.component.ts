import { FormGroup, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: [],
})
export class FormGroupComponent implements OnInit {
  @Input()
  form!: FormGroup;
  @Input()
  fieldName!: string;
  @Input() fieldLabel = '';
  @Input()
  fieldType!: string;
  @Input()
  fieldMaxSize!: number;
  @Input()
  fieldMaxLength!: number;
  @Input()
  fieldPlaceHolder!: string;
  @Input() fieldValidationMessage = '';
  @Input()
  fieldMask!: string;
  @Input()
  fieldOptionsList!: any[];
  @Input()
  fieldOptionsListAsync!: Observable<any[]>;
  @Input() fieldReadOnly = false;
  @Input() disabled = false;
  @Input()
  optionValue!: string;
  @Input()
  optionText!: string;
  @Input() hidden = false;
  @Input() fieldPrecision = 0;
  @Input() fieldMasks: MaskDefinition[] | undefined;
  @Input() optionTextFunction: ((item: any) => string) | undefined;
  @Input()
  maxValue!: number;
  @Input()
  max!: string;
  @Input()
  multipleValues!: boolean;
  @Input()
  className!: string;

  @Output() selectChange = new EventEmitter<any>();
  @Output() blur = new EventEmitter<any>();
  @Output() change = new EventEmitter<any>();

  isRequired = false;

  constructor() {}

  ngOnInit() {
    let fieldLabel = this.fieldLabel;
    if (this.fieldLabel == null || this.fieldLabel === '') {
      fieldLabel = this.fieldName;
    }

    if (this.fieldMaxSize == null || this.fieldMaxSize === 0) {
      this.fieldMaxSize = 100;
    }

    if (this.fieldMaxLength == null || this.fieldMaxLength === 0) {
      this.fieldMaxLength = 30;
    }

    if (this.fieldType == null || this.fieldType === '') {
      this.fieldType = 'text';
    }

    if (this.fieldPlaceHolder == null || this.fieldPlaceHolder === '') {
      this.fieldPlaceHolder = fieldLabel;
    }

    if (this.fieldMask == null || this.fieldMask === '') {
      this.fieldMask = '';
    }

    if (
      this.optionText == null ||
      this.optionText.length == 0 ||
      this.optionText.length === undefined
    ) {
      this.optionText = 'descricao';
    }

    if (
      this.optionValue == null ||
      this.optionValue.length == 0 ||
      this.optionValue === undefined
    ) {
      this.optionValue = 'id';
    }

    if (this.fieldType === 'percentage' && this.fieldPrecision === 0) {
      this.fieldPrecision = 2;
    }
  }

  selectChanged(event: any) {
    this.selectChange.emit(this.form.get(this.fieldName)?.value);
  }

  onBlur(event: any) {
    this.blur.emit(event);
  }

  hasRequiredField(abstractControl: AbstractControl | null): boolean {
    if (!abstractControl) return false;
    if (abstractControl.validator) {
      const validator = abstractControl.validator({} as AbstractControl);
      if (validator && validator['required']) {
        return true;
      }
    }
    if ((abstractControl as any)['controls']) {
      for (const controlName in (abstractControl as any)['controls']) {
        if ((abstractControl as any)['controls'][controlName]) {
          if (
            this.hasRequiredField(
              (abstractControl as any)['controls'][controlName]
            )
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }

  onKeyup(event: any) {
    if (this.fieldMasks != null && this.fieldMasks.length > 0) {
      let length = event.target.value.length;
      let maskString = '';
      this.fieldMasks.map((mask) => {
        if (
          length <= (mask.length ?? 0) &&
          (maskString == '' || length == this.fieldMask.length)
        ) {
          maskString = mask.mask ?? '';
        }
      });
      if (maskString != '') {
        this.fieldMask = maskString;
      }
    }
  }

  public getRequiredValue() {
    if (this.hasRequiredField(this.form.get(this.fieldName))) return '*';
    return '';
  }

  onChange(event: any) {
    this.change.emit(event);
    if (this.fieldMasks != null && this.fieldMasks.length > 0) {
      let length = event.target.value.length;
      let maskString = '';
      this.fieldMasks.map((mask) => {
        if (length <= (mask.length ?? 0) && maskString == '') {
          maskString = mask.mask ?? '';
        }
      });
      if (maskString != '') {
        this.fieldMask = maskString;
      }
    }
  }
}

export class MaskDefinition {
  length: number | undefined;
  mask: string | undefined;
}
