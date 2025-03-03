/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { LogoGridItem } from "./components/logo-grid/logo-grid";
export { LogoGridItem } from "./components/logo-grid/logo-grid";
export namespace Components {
    interface HeaderImage {
        "headline": string;
        "image": string;
        "subheader": string;
    }
    interface LogoGrid {
        "itemHeight": number;
        "items": LogoGridItem[];
    }
    interface StackLayout {
        "overlap": number;
    }
    interface StackProductHeader {
        "headline": string;
        "imageUrl": string;
    }
    interface StackSection {
        "headline": string;
        "subtitle": string;
        "variant"?: 'primary' | 'secondary' | 'tertiary' | 'surface' | 'surface-variant';
    }
    interface StackSectionBlockImage {
        "maxHeight": number;
        "url": string;
    }
    interface StackSectionBlockVideo {
        "code": string;
        "videoId": string;
    }
    interface StackSectionFooterSocials {
        "facebook"?: string;
        "instagram"?: string;
        "linkedin"?: string;
        "website"?: string;
        "x"?: string;
        "youtube"?: string;
    }
    interface StackSectionMap {
        "accessToken": string;
        "center": [number, number];
        "height": number;
        "mapStyle": 'streets-v12' | 'outdoors-v12' | 'light-v11' | 'dark-v11' | 'satellite-v9' | 'satellite-streets-v12' | 'navigation-day-v1' | 'navigation-night-v1';
        "markerColor": `var(--md-sys-color-${string})`;
        "markers": [number, number][];
        "zoom": number;
    }
    interface TrustProvenanceFooter {
    }
}
declare global {
    interface HTMLHeaderImageElement extends Components.HeaderImage, HTMLStencilElement {
    }
    var HTMLHeaderImageElement: {
        prototype: HTMLHeaderImageElement;
        new (): HTMLHeaderImageElement;
    };
    interface HTMLLogoGridElement extends Components.LogoGrid, HTMLStencilElement {
    }
    var HTMLLogoGridElement: {
        prototype: HTMLLogoGridElement;
        new (): HTMLLogoGridElement;
    };
    interface HTMLStackLayoutElement extends Components.StackLayout, HTMLStencilElement {
    }
    var HTMLStackLayoutElement: {
        prototype: HTMLStackLayoutElement;
        new (): HTMLStackLayoutElement;
    };
    interface HTMLStackProductHeaderElement extends Components.StackProductHeader, HTMLStencilElement {
    }
    var HTMLStackProductHeaderElement: {
        prototype: HTMLStackProductHeaderElement;
        new (): HTMLStackProductHeaderElement;
    };
    interface HTMLStackSectionElement extends Components.StackSection, HTMLStencilElement {
    }
    var HTMLStackSectionElement: {
        prototype: HTMLStackSectionElement;
        new (): HTMLStackSectionElement;
    };
    interface HTMLStackSectionBlockImageElement extends Components.StackSectionBlockImage, HTMLStencilElement {
    }
    var HTMLStackSectionBlockImageElement: {
        prototype: HTMLStackSectionBlockImageElement;
        new (): HTMLStackSectionBlockImageElement;
    };
    interface HTMLStackSectionBlockVideoElement extends Components.StackSectionBlockVideo, HTMLStencilElement {
    }
    var HTMLStackSectionBlockVideoElement: {
        prototype: HTMLStackSectionBlockVideoElement;
        new (): HTMLStackSectionBlockVideoElement;
    };
    interface HTMLStackSectionFooterSocialsElement extends Components.StackSectionFooterSocials, HTMLStencilElement {
    }
    var HTMLStackSectionFooterSocialsElement: {
        prototype: HTMLStackSectionFooterSocialsElement;
        new (): HTMLStackSectionFooterSocialsElement;
    };
    interface HTMLStackSectionMapElement extends Components.StackSectionMap, HTMLStencilElement {
    }
    var HTMLStackSectionMapElement: {
        prototype: HTMLStackSectionMapElement;
        new (): HTMLStackSectionMapElement;
    };
    interface HTMLTrustProvenanceFooterElement extends Components.TrustProvenanceFooter, HTMLStencilElement {
    }
    var HTMLTrustProvenanceFooterElement: {
        prototype: HTMLTrustProvenanceFooterElement;
        new (): HTMLTrustProvenanceFooterElement;
    };
    interface HTMLElementTagNameMap {
        "header-image": HTMLHeaderImageElement;
        "logo-grid": HTMLLogoGridElement;
        "stack-layout": HTMLStackLayoutElement;
        "stack-product-header": HTMLStackProductHeaderElement;
        "stack-section": HTMLStackSectionElement;
        "stack-section-block-image": HTMLStackSectionBlockImageElement;
        "stack-section-block-video": HTMLStackSectionBlockVideoElement;
        "stack-section-footer-socials": HTMLStackSectionFooterSocialsElement;
        "stack-section-map": HTMLStackSectionMapElement;
        "trust-provenance-footer": HTMLTrustProvenanceFooterElement;
    }
}
declare namespace LocalJSX {
    interface HeaderImage {
        "headline"?: string;
        "image"?: string;
        "subheader"?: string;
    }
    interface LogoGrid {
        "itemHeight"?: number;
        "items"?: LogoGridItem[];
    }
    interface StackLayout {
        "overlap"?: number;
    }
    interface StackProductHeader {
        "headline"?: string;
        "imageUrl"?: string;
    }
    interface StackSection {
        "headline"?: string;
        "subtitle"?: string;
        "variant"?: 'primary' | 'secondary' | 'tertiary' | 'surface' | 'surface-variant';
    }
    interface StackSectionBlockImage {
        "maxHeight"?: number;
        "url"?: string;
    }
    interface StackSectionBlockVideo {
        "code"?: string;
        "videoId"?: string;
    }
    interface StackSectionFooterSocials {
        "facebook"?: string;
        "instagram"?: string;
        "linkedin"?: string;
        "website"?: string;
        "x"?: string;
        "youtube"?: string;
    }
    interface StackSectionMap {
        "accessToken"?: string;
        "center"?: [number, number];
        "height"?: number;
        "mapStyle"?: 'streets-v12' | 'outdoors-v12' | 'light-v11' | 'dark-v11' | 'satellite-v9' | 'satellite-streets-v12' | 'navigation-day-v1' | 'navigation-night-v1';
        "markerColor"?: `var(--md-sys-color-${string})`;
        "markers"?: [number, number][];
        "zoom"?: number;
    }
    interface TrustProvenanceFooter {
    }
    interface IntrinsicElements {
        "header-image": HeaderImage;
        "logo-grid": LogoGrid;
        "stack-layout": StackLayout;
        "stack-product-header": StackProductHeader;
        "stack-section": StackSection;
        "stack-section-block-image": StackSectionBlockImage;
        "stack-section-block-video": StackSectionBlockVideo;
        "stack-section-footer-socials": StackSectionFooterSocials;
        "stack-section-map": StackSectionMap;
        "trust-provenance-footer": TrustProvenanceFooter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "header-image": LocalJSX.HeaderImage & JSXBase.HTMLAttributes<HTMLHeaderImageElement>;
            "logo-grid": LocalJSX.LogoGrid & JSXBase.HTMLAttributes<HTMLLogoGridElement>;
            "stack-layout": LocalJSX.StackLayout & JSXBase.HTMLAttributes<HTMLStackLayoutElement>;
            "stack-product-header": LocalJSX.StackProductHeader & JSXBase.HTMLAttributes<HTMLStackProductHeaderElement>;
            "stack-section": LocalJSX.StackSection & JSXBase.HTMLAttributes<HTMLStackSectionElement>;
            "stack-section-block-image": LocalJSX.StackSectionBlockImage & JSXBase.HTMLAttributes<HTMLStackSectionBlockImageElement>;
            "stack-section-block-video": LocalJSX.StackSectionBlockVideo & JSXBase.HTMLAttributes<HTMLStackSectionBlockVideoElement>;
            "stack-section-footer-socials": LocalJSX.StackSectionFooterSocials & JSXBase.HTMLAttributes<HTMLStackSectionFooterSocialsElement>;
            "stack-section-map": LocalJSX.StackSectionMap & JSXBase.HTMLAttributes<HTMLStackSectionMapElement>;
            "trust-provenance-footer": LocalJSX.TrustProvenanceFooter & JSXBase.HTMLAttributes<HTMLTrustProvenanceFooterElement>;
        }
    }
}
