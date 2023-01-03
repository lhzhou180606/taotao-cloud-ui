import { Ref } from 'vue';
import type { QSelect } from 'quasar';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
    };
    optionLabel: {
        type: StringConstructor;
        default: string;
    };
    optionValue: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
    };
}, {
    selectedValue: import("vue").WritableComputedRef<string | undefined>;
    options: Ref<string[]>;
    filter: (value: string, update: (callbackFn: () => void, after?: ((ref: QSelect) => void) | undefined) => void, abort: () => void) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
    };
    optionLabel: {
        type: StringConstructor;
        default: string;
    };
    optionValue: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    optionLabel: string;
    optionValue: string;
}>;
export default _sfc_main;
