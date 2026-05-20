import { createShadowRootStory } from './storybook-utils.js';

export default {
  title: 'Components/Testimonials Carousel',
  tags: ['autodocs'],
};

const testimonialsMarkup = `
  <div class="carousel-stage">
  <div class="container">
    <h1>Testimonials Carousel</h1>
    <div class="carousel">
      <button class="nav-btn" type="button">❮</button>
      <div class="testimonial-card">
        <div class="avatar" aria-hidden="true">JD</div>
        <p id="testimonial-text">This UI component is clean and very easy to use.</p>
        <h3 id="testimonial-name">John Doe</h3>
      </div>
      <button class="nav-btn" type="button">❯</button>
    </div>
  </div>
  </div>
`;

function renderTestimonialsCarousel() {
  return createShadowRootStory({
    title: 'Testimonials Carousel',
    styles: ['/components/Tc.css'],
    extraStyles: `
      .carousel-stage {
        min-height: calc(100vh - 48px);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .avatar {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        margin: 0 auto 20px;
        background: linear-gradient(135deg, #2563eb, #22c55e);
        color: #fff;
        font-weight: 700;
        letter-spacing: 0.08em;
      }

      .testimonial-card {
        min-width: 100%;
      }
    `,
    content: testimonialsMarkup,
  });
}

export const Default = {
  render: renderTestimonialsCarousel,
};
