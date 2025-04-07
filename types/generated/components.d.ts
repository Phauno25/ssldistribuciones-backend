import type { Schema, Attribute } from '@strapi/strapi';

export interface UiLink extends Schema.Component {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'link';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    name: Attribute.String & Attribute.Required;
  };
}

export interface UiLinkList extends Schema.Component {
  collectionName: 'components_ui_link_lists';
  info: {
    displayName: 'linkList';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    link: Attribute.Component<'ui.link', true>;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    variant: Attribute.Enumeration<['filled', 'outlined', 'link', 'gradient']>;
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface InputsInput extends Schema.Component {
  collectionName: 'components_inputs_inputs';
  info: {
    displayName: 'Input';
    icon: 'pencil';
  };
  attributes: {
    name: Attribute.String;
    type: Attribute.Enumeration<
      ['text', 'password', 'phone', 'email', 'checkbox', 'radio']
    > &
      Attribute.DefaultTo<'text'>;
    required: Attribute.Boolean & Attribute.DefaultTo<false>;
    label: Attribute.String;
    helperText: Attribute.String;
    accesibilityLabel: Attribute.String;
  };
}

export interface LayoutSection extends Schema.Component {
  collectionName: 'components_layout_sections';
  info: {
    displayName: 'Section With Items';
    icon: 'server';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    replaceImageWithSteps: Attribute.Boolean;
    titleBlock: Attribute.Component<'data.title-block'>;
    items: Attribute.Component<'data.item', true> &
      Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface LayoutSectionWithCta extends Schema.Component {
  collectionName: 'components_layout_section_with_ctas';
  info: {
    displayName: 'Section With CTA';
    icon: 'apps';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    callToActions: Attribute.Component<'ui.button', true>;
    imageAlt: Attribute.String;
    titleBlock: Attribute.Component<'data.title-block'>;
  };
}

export interface LayoutRichBodyText extends Schema.Component {
  collectionName: 'components_layout_rich_body_texts';
  info: {
    displayName: 'Rich Body Text';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks;
  };
}

export interface LayoutHeroCenterWithBgImage extends Schema.Component {
  collectionName: 'components_layout_hero_center_with_bg_images';
  info: {
    displayName: 'Hero';
    icon: 'expand';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'videos'>;
    title: Attribute.String;
    description: Attribute.Text;
    actionButtons: Attribute.Component<'ui.button', true> &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    variant: Attribute.Enumeration<['left', 'right', 'centered', 'column']> &
      Attribute.DefaultTo<'left'>;
    imgAsBackground: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutBannerWithItems extends Schema.Component {
  collectionName: 'components_layout_banner_with_items';
  info: {
    displayName: 'Banner with Items';
    icon: 'server';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'data.item', true> &
      Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    background: Attribute.Media<'images' | 'videos'>;
  };
}

export interface DataTitleBlock extends Schema.Component {
  collectionName: 'components_data_title_blocks';
  info: {
    displayName: 'Title Block';
    icon: 'filter';
  };
  attributes: {
    header: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface DataKeyValue extends Schema.Component {
  collectionName: 'components_data_key_values';
  info: {
    displayName: 'KeyValue';
    icon: 'oneToOne';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.String;
  };
}

export interface DataItem extends Schema.Component {
  collectionName: 'components_data_items';
  info: {
    displayName: 'Item';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Enumeration<['user-info', 'contacts', 'logout']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.link': UiLink;
      'ui.link-list': UiLinkList;
      'ui.button': UiButton;
      'inputs.input': InputsInput;
      'layout.section': LayoutSection;
      'layout.section-with-cta': LayoutSectionWithCta;
      'layout.rich-body-text': LayoutRichBodyText;
      'layout.hero-center-with-bg-image': LayoutHeroCenterWithBgImage;
      'layout.banner-with-items': LayoutBannerWithItems;
      'data.title-block': DataTitleBlock;
      'data.key-value': DataKeyValue;
      'data.item': DataItem;
    }
  }
}
