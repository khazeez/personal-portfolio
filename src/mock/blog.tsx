type BlogPost = {
  image: string
  title: string;
  content: string; // ~500 karakter
  timestamp: string; // ISO Date
  category: string[]; // bisa >1 kategori
};

export const mockBlogPosts: BlogPost[] = [
  {
    image: "/p1.jpeg",
    title: 'The Rise of Functional UI',
    content:
      'Functional UI is reshaping how we build and reason about interfaces. By decoupling logic from presentation, developers gain reusable, composable components that remain predictable even as an application scales. Libraries such as React, Svelte, and SolidJS embrace this paradigm, championing declarative data flow over imperative DOM juggling. The change is not merely stylistic; it improves performance, testing, and team collaboration. From small startup prototypes to sprawling enterprise dashboards, functional UI shortens feedback loops and lowers cognitive load, giving teams confidence to iterate rapidly without fear of hidden side‑effects.',
    timestamp: new Date('2025-06-27T10:00:00Z').toISOString(),
    category: ['UI/UX', 'Frontend', 'Best Practices'],
  },
  {
    image: "/p1.jpeg",
    title: 'Understanding JavaScript Closures',
    content:
      'Closures sit at the heart of JavaScript’s flexibility. They allow inner functions to remember the lexical environment in which they were created, long after the outer function has returned. This capability powers private variables, function factories, and elegant callback patterns used in asynchronous code. Yet closures can be a double‑edged sword; misusing them may cause memory leaks or confusing scope chains. By internalizing how the scope chain is built and how garbage collection handles closed‑over variables, developers unlock more expressive APIs while avoiding common pitfalls in real‑world production apps.',
    timestamp: new Date('2025-06-26T09:15:00Z').toISOString(),
    category: ['JavaScript', 'Concepts', 'Fundamentals'],
  },
  {
    image: "/p1.jpeg",
    title: 'Optimizing React Apps for Speed',
    content:
      'Modern users abandon slow sites in seconds, so performance is a product feature. React provides granular hooks—`memo`, `useMemo`, `useCallback`—that help skip needless renders. Combined with dynamic import–based code‑splitting, tree‑shaking, and image optimization, bundle size drops dramatically. Virtualization libraries such as `react‑window` paint thousands of rows without jank, while service workers keep assets local for offline resilience. Measurement remains key: the React Profiler, Lighthouse, and Web Vitals reveal where to focus effort and verify that each change genuinely moves the performance needle.',
    timestamp: new Date('2025-06-25T13:40:00Z').toISOString(),
    category: ['React', 'Performance', 'Frontend'],
  },
  {
    image: "/p1.jpeg",
    title: 'TypeScript: Why It Matters',
    content:
      'TypeScript overlays JavaScript with a powerful, gradual type‑system that flags many classes of bugs before code ever reaches production. In large teams, explicit types double as living documentation and enable safer refactors with confident autocomplete. Advanced features—generics, conditional types, template‑literal types—let libraries express rich, compile‑time guarantees without runtime overhead. While adopting TypeScript introduces an initial learning curve, most teams recoup the investment quickly via reduced debugging time, clearer intent, and tooling that illuminates codebases which previously felt opaque and brittle.',
    timestamp: new Date('2025-06-24T15:00:00Z').toISOString(),
    category: ['TypeScript', 'Tooling', 'Developer Experience'],
  },
  {
    image: "/p1.jpeg",
    title: 'Dark Mode and Accessibility',
    content:
      'Dark mode is more than a trendy toggle; it can reduce eye strain, extend OLED battery life, and accommodate users with certain visual impairments. But accessibility demands sufficient contrast, balanced color palettes, and thoughtful elevation cues. Implementing dark mode with CSS custom properties and the `prefers‑color‑scheme` media query keeps themes in sync with user system settings. Testing with WCAG contrast tools and considering color‑blind palettes ensures inclusivity. Ultimately, great dark modes feel native, respect branding, and never sacrifice readability for style.',
    timestamp: new Date('2025-06-23T19:20:00Z').toISOString(),
    category: ['Accessibility', 'Design Systems', 'CSS'],
  },
  {
    image: "/p1.jpeg",
    title: 'CSS Grid vs Flexbox: When to Use What',
    content:
      'CSS Grid and Flexbox complement each other rather than compete. Flexbox excels at one‑dimensional alignment—think navbars, form controls, or evenly spaced buttons—while Grid shines when you need true two‑dimensional layouts such as magazine‑style cards, dashboards, or complex sidebars. Combining them lets you build responsive sites with fewer media queries. Understanding implicit versus explicit tracks, auto‑placement, and the `minmax()` function unlocks adaptive designs that gracefully handle unknown content sizes. Mastering both tools elevates your layout game far beyond float hacks of the past.',
    timestamp: new Date('2025-06-22T08:10:00Z').toISOString(),
    category: ['CSS', 'Layout', 'Responsive Design'],
  },
  {
    image: "/p1.jpeg",
    title: 'Next.js: The Meta Framework',
    content:
      'Next.js layers server‑side rendering, static site generation, and API routes atop React, providing performance and SEO benefits with minimal configuration. Its hybrid rendering—choosing per page between SSR, SSG, or ISR—means you never over‑fetch or under‑cache. Built‑in features such as Image Optimization, Middleware, and App Router simplify auth, analytics, and experiment rollout. With first‑class TypeScript support and tight integration with Vercel edge infrastructure, Next.js has become the de facto choice for production React, balancing developer experience and user latency in equal measure.',
    timestamp: new Date('2025-06-21T14:00:00Z').toISOString(),
    category: ['Next.js', 'Frameworks', 'Full‑Stack'],
  },
  {
    image: "/p1.jpeg",
    title: 'Git for Teams: Best Practices',
    content:
      'Successful collaboration depends on a clear, shared Git workflow. Whether you adopt Git Flow, trunk‑based development, or a hybrid model, consistency is paramount. Craft atomic commits with descriptive messages; reviewers should grasp the “why” at a glance. Enforce pull‑request checks such as linting and unit tests to prevent regressions. Feature flags decouple deployment from release, letting teams merge to mainline without fear. Finally, automate changelogs and semantic versioning so that release notes practically write themselves, creating a transparent history for stakeholders.',
    timestamp: new Date('2025-06-20T11:45:00Z').toISOString(),
    category: ['Git', 'Collaboration', 'DevOps'],
  },
  {
    image: "/p1.jpeg",
    title: 'The Power of UI Microinteractions',
    content:
      'Microinteractions—those tiny animations, haptic taps, or subtle sounds—turn mechanical flows into delightful experiences. A like button flip, a card hover lift, or a progress bar that playfully wiggles on completion reassures users that the system is alive and responsive. Tools like Framer Motion or GSAP let developers orchestrate timeline‑based or spring physics‑based interactions with minimal code. The key is restraint: microinteractions should reinforce feedback, guide focus, and stay performant; when overdone, they distract rather than delight.',
    timestamp: new Date('2025-06-19T17:30:00Z').toISOString(),
    category: ['Animation', 'UI/UX', 'Interaction Design'],
  },
  {
    image: "/p1.jpeg",
    title: 'Building Forms with React Hook Form',
    content:
      'Forms remain the backbone of data collection on the web, yet traditional controlled inputs in React can bog down performance with every keystroke. React Hook Form tackles this by leveraging uncontrolled components under the hood, registering inputs via refs and minimizing re‑renders. It pairs seamlessly with validation libraries like Yup or Zod, supports dynamic field arrays, and integrates with native HTML constraints. The result is cleaner code, faster forms, and a developer experience that scales gracefully from simple sign‑ups to multi‑step wizards.',
    timestamp: new Date('2025-06-18T12:00:00Z').toISOString(),
    category: ['Forms', 'React', 'Libraries'],
  },
];
