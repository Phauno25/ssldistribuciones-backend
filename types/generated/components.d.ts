import type { Schema, Struct } from '@strapi/strapi';

export interface DataAddresses extends Struct.ComponentSchema {
  collectionName: 'components_data_addresses';
  info: {
    displayName: 'Addresses';
    icon: 'pin';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DataItem extends Struct.ComponentSchema {
  collectionName: 'components_data_items';
  info: {
    description: '';
    displayName: 'Item';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    iconPosition: Schema.Attribute.Enumeration<
      ['left', 'right', 'top', 'bottom']
    >;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface DataKeyValue extends Struct.ComponentSchema {
  collectionName: 'components_data_key_values';
  info: {
    displayName: 'KeyValue';
    icon: 'oneToOne';
  };
  attributes: {
    name: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface DataTelephones extends Struct.ComponentSchema {
  collectionName: 'components_data_telephones';
  info: {
    displayName: 'telephones';
    icon: 'phone';
  };
  attributes: {
    hasWhatsapp: Schema.Attribute.Boolean;
    phone: Schema.Attribute.String;
  };
}

export interface DataTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_data_text_blocks';
  info: {
    displayName: 'Text Block';
    icon: 'bold';
  };
  attributes: {
    contentMain: Schema.Attribute.Blocks;
    contentSecondary: Schema.Attribute.Blocks;
    header: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DataTitleBlock extends Struct.ComponentSchema {
  collectionName: 'components_data_title_blocks';
  info: {
    displayName: 'Title Block';
    icon: 'filter';
  };
  attributes: {
    description: Schema.Attribute.Text;
    header: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InputsInput extends Struct.ComponentSchema {
  collectionName: 'components_inputs_inputs';
  info: {
    displayName: 'Input';
    icon: 'pencil';
  };
  attributes: {
    accesibilityLabel: Schema.Attribute.String;
    helperText: Schema.Attribute.String;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<
      ['text', 'password', 'phone', 'email', 'checkbox', 'radio']
    > &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface LayoutBannerWithCta extends Struct.ComponentSchema {
  collectionName: 'components_layout_banner_with_ctas';
  info: {
    description: '';
    displayName: 'Banner With CTA';
    icon: 'layout';
  };
  attributes: {
    cta: Schema.Attribute.Component<'ui.button', true>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutBannerWithItems extends Struct.ComponentSchema {
  collectionName: 'components_layout_banner_with_items';
  info: {
    description: '';
    displayName: 'Banner with Items';
    icon: 'server';
  };
  attributes: {
    description: Schema.Attribute.String;
    items: Schema.Attribute.Component<'data.item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeroCenterWithBgImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_center_with_bg_images';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'expand';
  };
  attributes: {
    actionButtons: Schema.Attribute.Component<'ui.button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    imgAsBackground: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['left', 'right', 'centered', 'column']
    > &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface LayoutHeroPage extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_pages';
  info: {
    displayName: 'HeroPage';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutRichBodyText extends Struct.ComponentSchema {
  collectionName: 'components_layout_rich_body_texts';
  info: {
    description: '';
    displayName: 'Rich Body Text';
    icon: 'strikeThrough';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

export interface LayoutSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_sections';
  info: {
    description: '';
    displayName: 'Section With Items';
    icon: 'server';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<'data.item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    replaceImageWithSteps: Schema.Attribute.Boolean;
    titleBlock: Schema.Attribute.Component<'data.title-block', false>;
  };
}

export interface LayoutSectionWithContent extends Struct.ComponentSchema {
  collectionName: 'components_layout_section_with_contents';
  info: {
    displayName: 'Section With Content';
    icon: 'layer';
  };
  attributes: {
    badge: Schema.Attribute.String;
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutSectionWithCta extends Struct.ComponentSchema {
  collectionName: 'components_layout_section_with_ctas';
  info: {
    description: '';
    displayName: 'Section With CTA';
    icon: 'apps';
  };
  attributes: {
    callToActions: Schema.Attribute.Component<'ui.button', true>;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    titleBlock: Schema.Attribute.Component<'data.title-block', false>;
  };
}

export interface LayoutTextGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_text_grids';
  info: {
    displayName: 'Text Grid';
    icon: 'layout';
  };
  attributes: {
    leftBlock: Schema.Attribute.Component<'data.text-block', false>;
    rightBlock: Schema.Attribute.Component<'data.text-block', false>;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['filled', 'outlined', 'link', 'gradient']
    >;
  };
}

export interface UiLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_links';
  info: {
    description: '';
    displayName: 'link';
    icon: 'hashtag';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface UiLinkList extends Struct.ComponentSchema {
  collectionName: 'components_ui_link_lists';
  info: {
    description: '';
    displayName: 'linkList';
    icon: 'bulletList';
  };
  attributes: {
    link: Schema.Attribute.Component<'ui.link', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'data.addresses': DataAddresses;
      'data.item': DataItem;
      'data.key-value': DataKeyValue;
      'data.telephones': DataTelephones;
      'data.text-block': DataTextBlock;
      'data.title-block': DataTitleBlock;
      'inputs.input': InputsInput;
      'layout.banner-with-cta': LayoutBannerWithCta;
      'layout.banner-with-items': LayoutBannerWithItems;
      'layout.hero-center-with-bg-image': LayoutHeroCenterWithBgImage;
      'layout.hero-page': LayoutHeroPage;
      'layout.rich-body-text': LayoutRichBodyText;
      'layout.section': LayoutSection;
      'layout.section-with-content': LayoutSectionWithContent;
      'layout.section-with-cta': LayoutSectionWithCta;
      'layout.text-grid': LayoutTextGrid;
      'ui.button': UiButton;
      'ui.link': UiLink;
      'ui.link-list': UiLinkList;
    }
  }
}
