import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';
import { type FormSize } from '@/constants/form-sizes';
declare function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function RadioGroupItem({ className, size, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
    size?: FormSize;
}): import("react/jsx-runtime").JSX.Element;
export { RadioGroup, RadioGroupItem };
//# sourceMappingURL=radio-group.d.ts.map