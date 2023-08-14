import { UpdateCommInfo } from "../../Models/Contact/comm-info";
import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import {
  AddressFormGroup,
  CommInfoFormGroup,
  FaxFormGroup,
  MobileFormGroup,
  PhoneFormGroup,
  TollFreeFormGroup,
} from "../../Models/FormGroups/Contact/address-form";
import { CommInfo } from "../../Models/Contact/comm-info";
import { componentOptions } from "../../Models/Contact/view-settings";
import { CommInfoComponentsNames } from "../../Models/enums/components-names";

const urlReg = new RegExp(
  "^([a-zA-Z]+:\\/\\/)?" + // protocol
  "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
  "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
  "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
  "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$", // fragment locator
  "i"
);
@Injectable({
  providedIn: "root",
})
export class CommInfoService {
  createAddressFormArray(addresses: CommInfo[], options: { [path: string]: componentOptions }) {
    const newArr: any[] = [];
    addresses.forEach((x) => {
      const address = new FormGroup<CommInfoFormGroup>({
        address: new FormGroup<AddressFormGroup>({
          line1: new FormControl(
            {
              value: x.address.line1,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_ADDRESS_TXT_ADDRESS1]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_ADDRESS_TXT_ADDRESS1]?.isRequired
                ? Validators.required.bind(this)
                : [],
            }
          ),
          line2: new FormControl(
            {
              value: x.address.line2,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_ADDRESS_TXT_ADDRESS2]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_ADDRESS_TXT_ADDRESS2].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
          cityName: new FormControl<string>(
            {
              value: x.address.cityName,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_ADDRESS_TXT_CITY]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_ADDRESS_TXT_CITY].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
          stateId: new FormControl(
            {
              value: x.address.stateId ?? 0,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_ADDRESS_TXT_STATE]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_ADDRESS_TXT_STATE].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
          countryId: new FormControl(
            {
              value: x.address.countryId ?? 0,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_ADDRESS_TXT_COUNTRY]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_ADDRESS_TXT_COUNTRY].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
          postalCode: new FormControl(
            {
              value: x.address.postalCode,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_ADDRESS_TXT_POSTAL_CODE]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_ADDRESS_TXT_POSTAL_CODE].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
        }),
        phone: new FormGroup<PhoneFormGroup>({
          countryId: new FormControl(
            {
              value: x.phone.countryId ?? 0,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_PHONE_TXT_COUNTRY]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_PHONE_TXT_COUNTRY].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
          phoneCode: new FormControl(
            {
              value: x.phone.phoneCode,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_PHONE_TXT_NUMBER_CODE]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_PHONE_TXT_NUMBER_CODE].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
          prefix: new FormControl(x.phone.prefix, { nonNullable: true }),
          areaCode: new FormControl(
            {
              value: x.phone.areaCode,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_PHONE_TXT_NUMBER_AREA]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_PHONE_TXT_NUMBER_AREA].isRequired
                ? [Validators.required.bind(this), Validators.minLength(3)]
                : [Validators.minLength(3)],
            }
          ),
          number: new FormControl(
            {
              value: x.phone.number,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_PHONE_TXT_NUMBER]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_PHONE_TXT_NUMBER].isRequired
                ? [Validators.required.bind(this), Validators.minLength(3)]
                : [Validators.minLength(3)],
            }
          ),
          extension: new FormControl(
            {
              value: x.phone.extension,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_PHONE_TXT_NUMBER_EXT]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_PHONE_TXT_NUMBER_EXT].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
        }),
        fax: new FormGroup<FaxFormGroup>({
          countryId: new FormControl(
            {
              value: x.fax.countryId ?? 0,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_FAX_TXT_COUNTRY]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_FAX_TXT_COUNTRY].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
          phoneCode: new FormControl(
            {
              value: x.fax.phoneCode,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_FAX_TXT_NUMBER_CODE]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_FAX_TXT_NUMBER_CODE].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
          prefix: new FormControl(x.fax.prefix, { nonNullable: true }),
          areaCode: new FormControl(
            {
              value: x.fax.areaCode,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_FAX_TXT_NUMBER_AREA]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_FAX_TXT_NUMBER_AREA].isRequired
                ? [Validators.required.bind(this), Validators.minLength(3)]
                : [Validators.minLength(3)],
            }
          ),
          number: new FormControl(
            {
              value: x.fax.number,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_FAX_TXT_NUMBER]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_FAX_TXT_NUMBER].isRequired
                ? [Validators.required.bind(this), Validators.minLength(3)]
                : [Validators.minLength(3)],
            }
          ),
          extension: new FormControl(
            {
              value: x.fax.extension,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_FAX_TXT_NUMBER_EXT]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_FAX_TXT_NUMBER_EXT].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
        }),
        tollFree: new FormGroup<TollFreeFormGroup>({
          countryId: new FormControl(
            {
              value: x.tollFree.countryId ?? 0,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_TOLL_FREE_TXT_COUNTRY]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_TOLL_FREE_TXT_COUNTRY].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
          phoneCode: new FormControl(
            {
              value: x.tollFree.phoneCode,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_TOLL_FREE_TXT_NUMBER_CODE]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_TOLL_FREE_TXT_NUMBER_CODE].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
          prefix: new FormControl(x.tollFree.prefix, { nonNullable: true }),
          areaCode: new FormControl(
            {
              value: x.tollFree.areaCode,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_TOLL_FREE_TXT_NUMBER_AREA]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_TOLL_FREE_TXT_NUMBER_AREA].isRequired
                ? [Validators.required.bind(this), Validators.minLength(3)]
                : [Validators.minLength(3)],
            }
          ),
          number: new FormControl(
            {
              value: x.tollFree.number,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_TOLL_FREE_TXT_NUMBER]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_TOLL_FREE_TXT_NUMBER].isRequired
                ? [Validators.required.bind(this), Validators.minLength(3)]
                : [Validators.minLength(3)],
            }
          ),
        }),
        mobile: new FormGroup<MobileFormGroup>({
          countryId: new FormControl(
            {
              value: x.mobile.countryId ?? 0,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_MOBILE_TXT_COUNTRY]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_MOBILE_TXT_COUNTRY].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
          phoneCode: new FormControl(
            {
              value: x.mobile.phoneCode,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_MOBILE_TXT_NUMBER_CODE]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_MOBILE_TXT_NUMBER_CODE].isRequired
                ? [Validators.required.bind(this)]
                : [],
            }
          ),
          prefix: new FormControl(x.mobile.prefix, { nonNullable: true }),
          areaCode: new FormControl(
            {
              value: x.mobile.areaCode,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_MOBILE_TXT_NUMBER_AREA]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_MOBILE_TXT_NUMBER_AREA].isRequired
                ? [Validators.required.bind(this), Validators.minLength(3)]
                : [Validators.minLength(3)],
            }
          ),
          number: new FormControl(
            {
              value: x.mobile.number,
              disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_MOBILE_TXT_NUMBER]?.isSelectable,
            },
            {
              nonNullable: true,
              validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_MOBILE_TXT_NUMBER].isRequired
                ? [Validators.required.bind(this), Validators.minLength(3)]
                : [Validators.minLength(3)],
            }
          ),
        }),
        email: new FormControl(
          {
            value: x.email.email,
            disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_EMAIL_TXT_EMAIL]?.isSelectable,
          },
          {
            nonNullable: true,
            validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_EMAIL_TXT_EMAIL]?.isRequired
              ? [Validators.required.bind(this), Validators.email.bind(this)]
              : [Validators.nullValidator.bind(this), Validators.email.bind(this)],
          }
        ),
        website: new FormControl(
          {
            value: x.website.website,
            disabled: !options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_URL_TXT_WEBSITE]?.isSelectable,
          },
          {
            nonNullable: true,
            validators: options[CommInfoComponentsNames.CLIP_CONTENT_CLIP_URL_TXT_WEBSITE]?.isRequired
              ? [Validators.required.bind(this), Validators.pattern(urlReg).bind(this)]
              : [Validators.nullValidator.bind(this), Validators.pattern(urlReg).bind(this)],
          }
        ),
      });
      newArr.push(address);
    });
    return newArr;
  }

  copyAllFromAddress(targetAddress: CommInfo, addressesFormArray: FormArray) {
    for (let i = 0; i < addressesFormArray.length; i++) {
      const group = addressesFormArray.at(i) as FormGroup<CommInfoFormGroup>;
      group.patchValue({
        address: {
          line1: targetAddress.address.line1,
          line2: targetAddress.address.line2,
          cityName: targetAddress.address.cityName,
          stateId: targetAddress.address.stateId,
          countryId: targetAddress.address.countryId,
          postalCode: targetAddress.address.postalCode,
        },
        fax: {
          countryId: targetAddress.fax.countryId,
          prefix: targetAddress.fax.prefix,
          areaCode: targetAddress.fax.areaCode,
          number: targetAddress.fax.number,
          extension: targetAddress.fax.extension,
        },
        mobile: {
          countryId: targetAddress.mobile.countryId,
          prefix: targetAddress.mobile.prefix,
          areaCode: targetAddress.mobile.areaCode,
          number: targetAddress.mobile.number,
        },
        phone: {
          countryId: targetAddress.phone.countryId,
          prefix: targetAddress.phone.prefix,
          areaCode: targetAddress.phone.areaCode,
          number: targetAddress.phone.number,
          extension: targetAddress.phone.extension,
        },
        tollFree: {
          countryId: targetAddress.tollFree.countryId,
          prefix: targetAddress.tollFree.prefix,
          areaCode: targetAddress.tollFree.areaCode,
          number: targetAddress.tollFree.number,
        },
        email: targetAddress.email.email,
        website: targetAddress.website.website,
      });
    }
  }
  copyAllFromPublish(addressesFormArray: FormArray) {
    const targetAddress = addressesFormArray.at(0) as FormGroup<CommInfoFormGroup>;
    for (let i = 1; i < addressesFormArray.length; i++) {
      const group = addressesFormArray.at(i) as FormGroup<CommInfoFormGroup>;
      group.patchValue({
        address: {
          line1: targetAddress.controls.address.controls.line1.value,
          line2: targetAddress.controls.address.controls.line2.value,
          cityName: targetAddress.controls.address.controls.cityName.value,
          stateId: targetAddress.controls.address.controls.stateId.value,
          countryId: targetAddress.controls.address.controls.countryId.value,
          postalCode: targetAddress.controls.address.controls.postalCode.value,
        },
        fax: {
          countryId: targetAddress.controls.fax.controls.countryId.value,
          prefix: targetAddress.controls.fax.controls.prefix.value,
          areaCode: targetAddress.controls.fax.controls.areaCode.value,
          number: targetAddress.controls.fax.controls.number.value,
          extension: targetAddress.controls.fax.controls.extension.value,
        },
        mobile: {
          countryId: targetAddress.controls.mobile.controls.countryId.value,
          prefix: targetAddress.controls.mobile.controls.prefix.value,
          areaCode: targetAddress.controls.mobile.controls.areaCode.value,
          number: targetAddress.controls.mobile.controls.number.value,
        },
        phone: {
          countryId: targetAddress.controls.phone.controls.countryId.value,
          prefix: targetAddress.controls.phone.controls.prefix.value,
          areaCode: targetAddress.controls.phone.controls.areaCode.value,
          number: targetAddress.controls.phone.controls.number.value,
          extension: targetAddress.controls.phone.controls.extension.value,
        },
        tollFree: {
          countryId: targetAddress.controls.tollFree.controls.countryId.value,
          prefix: targetAddress.controls.tollFree.controls.prefix.value,
          areaCode: targetAddress.controls.tollFree.controls.areaCode.value,
          number: targetAddress.controls.tollFree.controls.number.value,
        },
        email: targetAddress.controls.email.value,
        website: targetAddress.controls.website.value,
      });
    }
  }

  updateCommInfoMapper(
    companyAddressesInfo: CommInfo[],
    addressesFormArray: FormArray,
    isLinkedToPublish: boolean
  ): UpdateCommInfo[] {
    const companyCommInfo: UpdateCommInfo[] = [];
    for (let i = 0; i < companyAddressesInfo.length; i++) {
      const address = this.getAddressFormValue(addressesFormArray, i);
      address.commTypeId = companyAddressesInfo[i].commTypeId;
      if (address.commTypeId === 1) {
        address.linkedToCommTypeId = null;
      } else {
        address.linkedToCommTypeId = isLinkedToPublish ? 1 : null;
      }
      companyCommInfo.push(address);
    }
    return companyCommInfo;
  }

  getAddressFormValue(addressesFormArray: FormArray, index: number): CommInfo {
    const address = new CommInfo();
    const group = addressesFormArray.at(index) as FormGroup<CommInfoFormGroup>;

    address.address.line1 = group.controls.address.controls.line1.value;
    address.address.stateId = this.checkIdValue(group.controls.address.controls.stateId.value);
    address.address.countryId = this.checkIdValue(group.controls.address.controls.countryId.value);
    address.address.line2 = group.controls.address.controls.line2.value;
    address.address.cityName = group.controls.address.controls.cityName.value;
    address.address.postalCode = group.controls.address.controls.postalCode.value;

    address.phone.countryId = this.checkIdValue(group.controls.phone.controls.countryId.value);
    address.phone.phoneCode = group.controls.phone.controls.phoneCode.value;
    address.phone.prefix = group.controls.phone.controls.prefix.value;
    address.phone.areaCode = group.controls.phone.controls.areaCode.value;
    address.phone.number = group.controls.phone.controls.number.value;
    address.phone.extension = group.controls.phone.controls.extension.value;

    address.fax.countryId = this.checkIdValue(group.controls.fax.controls.countryId.value);
    address.fax.phoneCode = group.controls.fax.controls.phoneCode.value;
    address.fax.prefix = group.controls.fax.controls.prefix.value;
    address.fax.areaCode = group.controls.fax.controls.areaCode.value;
    address.fax.number = group.controls.fax.controls.number.value;
    address.fax.extension = group.controls.fax.controls.extension.value;

    address.tollFree.countryId = this.checkIdValue(group.controls.tollFree.controls.countryId.value);
    address.tollFree.phoneCode = group.controls.tollFree.controls.phoneCode.value;
    address.tollFree.prefix = group.controls.tollFree.controls.prefix.value;
    address.tollFree.areaCode = group.controls.tollFree.controls.areaCode.value;
    address.tollFree.number = group.controls.tollFree.controls.number.value;

    address.mobile.countryId = this.checkIdValue(group.controls.mobile.controls.countryId.value);
    address.mobile.phoneCode = group.controls.mobile.controls.phoneCode.value;
    address.mobile.prefix = group.controls.mobile.controls.prefix.value;
    address.mobile.areaCode = group.controls.mobile.controls.areaCode.value;
    address.mobile.number = group.controls.mobile.controls.number.value;

    address.email.email = group.controls.email.value;
    address.website.website = group.controls.website.value;

    return address;
  }

  private checkIdValue(value: any): number | undefined {
    return (+value ?? undefined) !== 0 ? +value : undefined;
  }
}
