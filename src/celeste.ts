import {
  polymorphicFactory,
  type DOMElements,
  type HTMLPolymorphicComponents,
  type HTMLPolymorphicProps,
} from '@polymorphic-factory/vue';

export type HTMLCelesteComponents = HTMLPolymorphicComponents;

export type HTMLCelesteProps<T extends DOMElements> = HTMLPolymorphicProps<T>;

export const celeste = polymorphicFactory();
