import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'stack-section-block-video',
  styleUrl: 'stack-section-block-video.css',
  shadow: false,
})
export class StackSectionBlockVideo {
  @Prop() code: string = 'x75fdruh6bqg6lte';
  @Prop() videoId: string;
  @Prop() paddingTop: number = 75;
  @Prop() marginBottom: number = -10;

  render() {
    const poster = `https://customer-${this.code}.cloudflarestream.com/${this.videoId}/thumbnails/thumbnail.jpg`;

    return (
      <Host>
        <div class="video-container" style={{ paddingTop: `${this.paddingTop}%`, marginBottom: `${this.marginBottom}px` }}>
          <iframe
            src={`https://customer-${this.code}.cloudflarestream.com/${this.videoId}/iframe?muted=true&preload=true&loop=true&autoplay=true&controls=false&poster=${poster}`}
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
      </Host>
    );
  }
}
