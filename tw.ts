// http://github.com/dvkndn/typed-tailwind
export const Tw = (): Tailwind => new Tailwind();

class Tailwind {
    value = '';

    // Getter methods
    // Why "$":
    // - https://github.com/microsoft/TypeScript/issues/2361
    // - https://github.com/microsoft/TypeScript/issues/4538
    // - https://en.wikipedia.org/wiki/Regular_expression
    $(): string {
        return this.value;
    }
    [Symbol.toPrimitive](): string {
        return this.$();
    }

    // Building methods
    private add(value: string): Tailwind {
        this.value = `${this.value} ${value}`;
        return this;
    }

    // Styling methods
    twBlock(): Tailwind {
        return this.add('tw-block');
    }
    twInlineBlock(): Tailwind {
        return this.add('tw-inline-block');
    }
    twInline(): Tailwind {
        return this.add('tw-inline');
    }
    twFlex(): Tailwind {
        return this.add('tw-flex');
    }
    twInlineFlex(): Tailwind {
        return this.add('tw-inline-flex');
    }
    twTable(): Tailwind {
        return this.add('tw-table');
    }
    twTableRow(): Tailwind {
        return this.add('tw-table-row');
    }
    twTableCell(): Tailwind {
        return this.add('tw-table-cell');
    }
    twHidden(): Tailwind {
        return this.add('tw-hidden');
    }
    twStatic(): Tailwind {
        return this.add('tw-static');
    }
    twFixed(): Tailwind {
        return this.add('tw-fixed');
    }
    twAbsolute(): Tailwind {
        return this.add('tw-absolute');
    }
    twRelative(): Tailwind {
        return this.add('tw-relative');
    }
    twSticky(): Tailwind {
        return this.add('tw-sticky');
    }
    twTextBlack(): Tailwind {
        return this.add('tw-text-black');
    }
    twTextWhite(): Tailwind {
        return this.add('tw-text-white');
    }
    twTextGrayLight(): Tailwind {
        return this.add('tw-text-gray-light');
    }
    twTextGrayMid(): Tailwind {
        return this.add('tw-text-gray-mid');
    }
    twTextGrayDark(): Tailwind {
        return this.add('tw-text-gray-dark');
    }
    twTextRedLight(): Tailwind {
        return this.add('tw-text-red-light');
    }
    twTextRedMid(): Tailwind {
        return this.add('tw-text-red-mid');
    }
    twTextRedDark(): Tailwind {
        return this.add('tw-text-red-dark');
    }
    twTextBlueLight(): Tailwind {
        return this.add('tw-text-blue-light');
    }
    twTextBlueMid(): Tailwind {
        return this.add('tw-text-blue-mid');
    }
    twTextBlueDark(): Tailwind {
        return this.add('tw-text-blue-dark');
    }
    twBgBlack(): Tailwind {
        return this.add('tw-bg-black');
    }
    twBgWhite(): Tailwind {
        return this.add('tw-bg-white');
    }
    twBgGrayLight(): Tailwind {
        return this.add('tw-bg-gray-light');
    }
    twBgGrayMid(): Tailwind {
        return this.add('tw-bg-gray-mid');
    }
    twBgGrayDark(): Tailwind {
        return this.add('tw-bg-gray-dark');
    }
    twBgRedLight(): Tailwind {
        return this.add('tw-bg-red-light');
    }
    twBgRedMid(): Tailwind {
        return this.add('tw-bg-red-mid');
    }
    twBgRedDark(): Tailwind {
        return this.add('tw-bg-red-dark');
    }
    twBgBlueLight(): Tailwind {
        return this.add('tw-bg-blue-light');
    }
    twBgBlueMid(): Tailwind {
        return this.add('tw-bg-blue-mid');
    }
    twBgBlueDark(): Tailwind {
        return this.add('tw-bg-blue-dark');
    }
    twM4(): Tailwind {
        return this.add('tw-m-4');
    }
    twM8(): Tailwind {
        return this.add('tw-m-8');
    }
    twM16(): Tailwind {
        return this.add('tw-m-16');
    }
    twM24(): Tailwind {
        return this.add('tw-m-24');
    }
    twM1(): Tailwind {
        return this.add('tw--m-1');
    }
    twMy4(): Tailwind {
        return this.add('tw-my-4');
    }
    twMx4(): Tailwind {
        return this.add('tw-mx-4');
    }
    twMy8(): Tailwind {
        return this.add('tw-my-8');
    }
    twMx8(): Tailwind {
        return this.add('tw-mx-8');
    }
    twMy16(): Tailwind {
        return this.add('tw-my-16');
    }
    twMx16(): Tailwind {
        return this.add('tw-mx-16');
    }
    twMy24(): Tailwind {
        return this.add('tw-my-24');
    }
    twMx24(): Tailwind {
        return this.add('tw-mx-24');
    }
    twMy1(): Tailwind {
        return this.add('tw--my-1');
    }
    twMx1(): Tailwind {
        return this.add('tw--mx-1');
    }
    twMt4(): Tailwind {
        return this.add('tw-mt-4');
    }
    twMr4(): Tailwind {
        return this.add('tw-mr-4');
    }
    twMb4(): Tailwind {
        return this.add('tw-mb-4');
    }
    twMl4(): Tailwind {
        return this.add('tw-ml-4');
    }
    twMt8(): Tailwind {
        return this.add('tw-mt-8');
    }
    twMr8(): Tailwind {
        return this.add('tw-mr-8');
    }
    twMb8(): Tailwind {
        return this.add('tw-mb-8');
    }
    twMl8(): Tailwind {
        return this.add('tw-ml-8');
    }
    twMt16(): Tailwind {
        return this.add('tw-mt-16');
    }
    twMr16(): Tailwind {
        return this.add('tw-mr-16');
    }
    twMb16(): Tailwind {
        return this.add('tw-mb-16');
    }
    twMl16(): Tailwind {
        return this.add('tw-ml-16');
    }
    twMt24(): Tailwind {
        return this.add('tw-mt-24');
    }
    twMr24(): Tailwind {
        return this.add('tw-mr-24');
    }
    twMb24(): Tailwind {
        return this.add('tw-mb-24');
    }
    twMl24(): Tailwind {
        return this.add('tw-ml-24');
    }
    twMt1(): Tailwind {
        return this.add('tw--mt-1');
    }
    twMr1(): Tailwind {
        return this.add('tw--mr-1');
    }
    twMb1(): Tailwind {
        return this.add('tw--mb-1');
    }
    twMl1(): Tailwind {
        return this.add('tw--ml-1');
    }
    twP4(): Tailwind {
        return this.add('tw-p-4');
    }
    twP8(): Tailwind {
        return this.add('tw-p-8');
    }
    twP16(): Tailwind {
        return this.add('tw-p-16');
    }
    twP24(): Tailwind {
        return this.add('tw-p-24');
    }
    twPy4(): Tailwind {
        return this.add('tw-py-4');
    }
    twPx4(): Tailwind {
        return this.add('tw-px-4');
    }
    twPy8(): Tailwind {
        return this.add('tw-py-8');
    }
    twPx8(): Tailwind {
        return this.add('tw-px-8');
    }
    twPy16(): Tailwind {
        return this.add('tw-py-16');
    }
    twPx16(): Tailwind {
        return this.add('tw-px-16');
    }
    twPy24(): Tailwind {
        return this.add('tw-py-24');
    }
    twPx24(): Tailwind {
        return this.add('tw-px-24');
    }
    twPt4(): Tailwind {
        return this.add('tw-pt-4');
    }
    twPr4(): Tailwind {
        return this.add('tw-pr-4');
    }
    twPb4(): Tailwind {
        return this.add('tw-pb-4');
    }
    twPl4(): Tailwind {
        return this.add('tw-pl-4');
    }
    twPt8(): Tailwind {
        return this.add('tw-pt-8');
    }
    twPr8(): Tailwind {
        return this.add('tw-pr-8');
    }
    twPb8(): Tailwind {
        return this.add('tw-pb-8');
    }
    twPl8(): Tailwind {
        return this.add('tw-pl-8');
    }
    twPt16(): Tailwind {
        return this.add('tw-pt-16');
    }
    twPr16(): Tailwind {
        return this.add('tw-pr-16');
    }
    twPb16(): Tailwind {
        return this.add('tw-pb-16');
    }
    twPl16(): Tailwind {
        return this.add('tw-pl-16');
    }
    twPt24(): Tailwind {
        return this.add('tw-pt-24');
    }
    twPr24(): Tailwind {
        return this.add('tw-pr-24');
    }
    twPb24(): Tailwind {
        return this.add('tw-pb-24');
    }
    twPl24(): Tailwind {
        return this.add('tw-pl-24');
    }
    twText14(): Tailwind {
        return this.add('tw-text-14');
    }
    twText16(): Tailwind {
        return this.add('tw-text-16');
    }
    twText18(): Tailwind {
        return this.add('tw-text-18');
    }
    smTwBlock(): Tailwind {
        return this.add('sm:tw-block');
    }
    smTwInlineBlock(): Tailwind {
        return this.add('sm:tw-inline-block');
    }
    smTwInline(): Tailwind {
        return this.add('sm:tw-inline');
    }
    smTwFlex(): Tailwind {
        return this.add('sm:tw-flex');
    }
    smTwInlineFlex(): Tailwind {
        return this.add('sm:tw-inline-flex');
    }
    smTwTable(): Tailwind {
        return this.add('sm:tw-table');
    }
    smTwTableRow(): Tailwind {
        return this.add('sm:tw-table-row');
    }
    smTwTableCell(): Tailwind {
        return this.add('sm:tw-table-cell');
    }
    smTwHidden(): Tailwind {
        return this.add('sm:tw-hidden');
    }
    smTwStatic(): Tailwind {
        return this.add('sm:tw-static');
    }
    smTwFixed(): Tailwind {
        return this.add('sm:tw-fixed');
    }
    smTwAbsolute(): Tailwind {
        return this.add('sm:tw-absolute');
    }
    smTwRelative(): Tailwind {
        return this.add('sm:tw-relative');
    }
    smTwSticky(): Tailwind {
        return this.add('sm:tw-sticky');
    }
    smTwM4(): Tailwind {
        return this.add('sm:tw-m-4');
    }
    smTwM8(): Tailwind {
        return this.add('sm:tw-m-8');
    }
    smTwM16(): Tailwind {
        return this.add('sm:tw-m-16');
    }
    smTwM24(): Tailwind {
        return this.add('sm:tw-m-24');
    }
    smTwM1(): Tailwind {
        return this.add('sm:tw--m-1');
    }
    smTwMy4(): Tailwind {
        return this.add('sm:tw-my-4');
    }
    smTwMx4(): Tailwind {
        return this.add('sm:tw-mx-4');
    }
    smTwMy8(): Tailwind {
        return this.add('sm:tw-my-8');
    }
    smTwMx8(): Tailwind {
        return this.add('sm:tw-mx-8');
    }
    smTwMy16(): Tailwind {
        return this.add('sm:tw-my-16');
    }
    smTwMx16(): Tailwind {
        return this.add('sm:tw-mx-16');
    }
    smTwMy24(): Tailwind {
        return this.add('sm:tw-my-24');
    }
    smTwMx24(): Tailwind {
        return this.add('sm:tw-mx-24');
    }
    smTwMy1(): Tailwind {
        return this.add('sm:tw--my-1');
    }
    smTwMx1(): Tailwind {
        return this.add('sm:tw--mx-1');
    }
    smTwMt4(): Tailwind {
        return this.add('sm:tw-mt-4');
    }
    smTwMr4(): Tailwind {
        return this.add('sm:tw-mr-4');
    }
    smTwMb4(): Tailwind {
        return this.add('sm:tw-mb-4');
    }
    smTwMl4(): Tailwind {
        return this.add('sm:tw-ml-4');
    }
    smTwMt8(): Tailwind {
        return this.add('sm:tw-mt-8');
    }
    smTwMr8(): Tailwind {
        return this.add('sm:tw-mr-8');
    }
    smTwMb8(): Tailwind {
        return this.add('sm:tw-mb-8');
    }
    smTwMl8(): Tailwind {
        return this.add('sm:tw-ml-8');
    }
    smTwMt16(): Tailwind {
        return this.add('sm:tw-mt-16');
    }
    smTwMr16(): Tailwind {
        return this.add('sm:tw-mr-16');
    }
    smTwMb16(): Tailwind {
        return this.add('sm:tw-mb-16');
    }
    smTwMl16(): Tailwind {
        return this.add('sm:tw-ml-16');
    }
    smTwMt24(): Tailwind {
        return this.add('sm:tw-mt-24');
    }
    smTwMr24(): Tailwind {
        return this.add('sm:tw-mr-24');
    }
    smTwMb24(): Tailwind {
        return this.add('sm:tw-mb-24');
    }
    smTwMl24(): Tailwind {
        return this.add('sm:tw-ml-24');
    }
    smTwMt1(): Tailwind {
        return this.add('sm:tw--mt-1');
    }
    smTwMr1(): Tailwind {
        return this.add('sm:tw--mr-1');
    }
    smTwMb1(): Tailwind {
        return this.add('sm:tw--mb-1');
    }
    smTwMl1(): Tailwind {
        return this.add('sm:tw--ml-1');
    }
    smTwP4(): Tailwind {
        return this.add('sm:tw-p-4');
    }
    smTwP8(): Tailwind {
        return this.add('sm:tw-p-8');
    }
    smTwP16(): Tailwind {
        return this.add('sm:tw-p-16');
    }
    smTwP24(): Tailwind {
        return this.add('sm:tw-p-24');
    }
    smTwPy4(): Tailwind {
        return this.add('sm:tw-py-4');
    }
    smTwPx4(): Tailwind {
        return this.add('sm:tw-px-4');
    }
    smTwPy8(): Tailwind {
        return this.add('sm:tw-py-8');
    }
    smTwPx8(): Tailwind {
        return this.add('sm:tw-px-8');
    }
    smTwPy16(): Tailwind {
        return this.add('sm:tw-py-16');
    }
    smTwPx16(): Tailwind {
        return this.add('sm:tw-px-16');
    }
    smTwPy24(): Tailwind {
        return this.add('sm:tw-py-24');
    }
    smTwPx24(): Tailwind {
        return this.add('sm:tw-px-24');
    }
    smTwPt4(): Tailwind {
        return this.add('sm:tw-pt-4');
    }
    smTwPr4(): Tailwind {
        return this.add('sm:tw-pr-4');
    }
    smTwPb4(): Tailwind {
        return this.add('sm:tw-pb-4');
    }
    smTwPl4(): Tailwind {
        return this.add('sm:tw-pl-4');
    }
    smTwPt8(): Tailwind {
        return this.add('sm:tw-pt-8');
    }
    smTwPr8(): Tailwind {
        return this.add('sm:tw-pr-8');
    }
    smTwPb8(): Tailwind {
        return this.add('sm:tw-pb-8');
    }
    smTwPl8(): Tailwind {
        return this.add('sm:tw-pl-8');
    }
    smTwPt16(): Tailwind {
        return this.add('sm:tw-pt-16');
    }
    smTwPr16(): Tailwind {
        return this.add('sm:tw-pr-16');
    }
    smTwPb16(): Tailwind {
        return this.add('sm:tw-pb-16');
    }
    smTwPl16(): Tailwind {
        return this.add('sm:tw-pl-16');
    }
    smTwPt24(): Tailwind {
        return this.add('sm:tw-pt-24');
    }
    smTwPr24(): Tailwind {
        return this.add('sm:tw-pr-24');
    }
    smTwPb24(): Tailwind {
        return this.add('sm:tw-pb-24');
    }
    smTwPl24(): Tailwind {
        return this.add('sm:tw-pl-24');
    }
    smTwText14(): Tailwind {
        return this.add('sm:tw-text-14');
    }
    smTwText16(): Tailwind {
        return this.add('sm:tw-text-16');
    }
    smTwText18(): Tailwind {
        return this.add('sm:tw-text-18');
    }
}
