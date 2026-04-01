import { Link } from 'react-router-dom';
import MonolithNav from '../components/MonolithNav';

const PublicPortfolio = () => {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface antialiased selection:bg-primary selection:text-on-primary">
      <MonolithNav />

      <main className="pt-32 pb-20 px-8 max-w-[1920px] mx-auto">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-4xl">
            <h1 className="font-headline font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-tighter leading-[0.9] text-primary mb-8">
              Get the portfolio
              <br />
              you are interested with
            </h1>
            <p className="font-body text-lg sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              A curated selection of the most influential architectural and digital monoliths from around the world. Filtered by
              craftsmanship and soul.
            </p>
          </div>
          <div className="flex gap-4 mb-2">
            <button
              type="button"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity flex items-center gap-3"
            >
              Explore All <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </header>

        <section className="mb-20 bg-surface-container-low p-2 rounded-2xl flex flex-wrap gap-2 items-center">
          <div className="flex-1 min-w-[280px] sm:min-w-[300px] relative">
            <span className="absolute left-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-neutral-400">search</span>
            <input
              className="w-full bg-surface-container-lowest border-none rounded-xl py-5 pl-16 pr-6 focus:ring-2 focus:ring-black transition-all font-body"
              placeholder="Search projects, creators, or styles..."
              type="text"
            />
          </div>
          <div className="flex gap-2">
            <div className="px-6 py-5 bg-surface-container-lowest rounded-xl font-headline font-bold text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer hover:bg-white transition-colors">
              Architecture <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>
            <div className="px-6 py-5 bg-surface-container-lowest rounded-xl font-headline font-bold text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer hover:bg-white transition-colors">
              Minimalism <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>
            <div className="px-6 py-5 bg-primary text-on-primary rounded-xl font-headline font-bold text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-sm">tune</span> Filters
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12">
          <article className="md:col-span-7 flex flex-col group">
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] bg-surface-container">
              <img
                alt="Glass Skyscraper"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAge-oltlErKRbK_6-03kjm29jW4JcFlc8CuCAJpel2oXC5Bi0lpCCdX0ANv9cyDUr9geodpdwcNS9lRW9k_a_VkVRC7x8y4opYgvugx3a73yN2sh4essByg8TSapPqXk1iCdg-nDbhYygqS8lCh1FhyLsy08-x05oblLmFGB8Mzr68rry2_fFZlgqj36p57Jk1UZ2wIuGUtyBgCT99OJvTwxvYj9y8E0zFTExx7bsSaDeK0EyFEa2ET8eUQeqFEeDtUNEOQvYeLA"
              />
              <div className="absolute bottom-6 left-6 flex gap-2">
                <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-2 rounded-full font-label font-bold text-[10px] tracking-widest uppercase">
                  Structure
                </span>
                <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-2 rounded-full font-label font-bold text-[10px] tracking-widest uppercase">
                  Brutalist
                </span>
              </div>
            </div>

            <div className="-mt-12 ml-12 bg-surface-container-lowest p-10 shadow-ambient rounded-lg relative z-10 max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden">
                  <img
                    alt="Creator"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfsO-vrfcQlpgPIjFZKBUPGoAmZ6q9kSMjh2LUzrpOMZkBpYTqQJ8y6K-chNECZPFieutZaDmRm_sfQuL0oMXZf8trQkv-4nRIWxsRNBYbdaK5DOZ1S8ajQsCqGyPre3OqPVDC-hOkBnA_MImubv2PNryLH8oH8C_PMLrDllti3CCcOm6H7oO3yjb5bmS43ky6TLk4rBRbmFPdwehLuftc8P9RjvB7McQK8ST67hwvTjE5u6pdl7bybszTRCulEHrKv8F4G6jWkw"
                  />
                </div>
                <span className="font-label font-bold text-xs tracking-widest uppercase text-on-surface-variant">Elias Vance</span>
              </div>
              <h3 className="font-headline font-extrabold text-4xl tracking-tighter mb-4">The Obsidian Spire</h3>
              <p className="font-body text-sm text-neutral-500 leading-relaxed mb-6">
                Exploring the intersection of vertical density and dark materiality in the heart of the tech district.
              </p>
              <Link
                className="font-headline font-bold text-xs tracking-widest uppercase border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-300 transition-all inline-block"
                to="#"
              >
                View Case Study
              </Link>
            </div>
          </article>

          <article className="md:col-span-5 flex flex-col group self-center">
            <div className="relative rounded-lg overflow-hidden aspect-square bg-surface-container">
              <img
                alt="Modern Office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMx_D70IWifCwiuBThyBA-e0HNwikoJbGabCtoM565zIslMxov5a1NvJzd8ndWjC4TDKKlQ50WImKvGzH8LOt8fXLzVlP5ixGCF9Bvx74LdqpuwWH3X2t94KpBj--veMdInsS0Je_htF0gHQdr7BYLyYlw9my7a8Oh-bh0_F-QmFEU5SSzHXMaI4YTy9ik8m6yFHDvzoMjJJRLWI6HNQT49rg0itLqUJfC_mu_wvikL63gqK4_-r0MNxS3u6LQCeyG4_HODgsA_g"
              />
            </div>
            <div className="-mt-8 mr-12 bg-surface-container-lowest p-8 shadow-ambient rounded-lg relative z-10 self-end max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden">
                  <img
                    alt="Creator"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLifwkS4KJgPeGPXUCkRZXZeo8k2f_TFamfbxhoE_i44FbUOMxPrZj7diEqdPc9kiAytdrW0XoMYv-Wy5n4Q2p1SLCELiLw0lJii88LWhokpLkF2neIgluwCodFyPKiFCw3p5dlANhxlxJDPFkT7QMz8f4DrPqxkWUZDIxsd3Qq6-Az_yl7oQm2MgakPHBc5vpmQ65UAwPJzvSBLJIbOgj0AcMKxjUfspoi9A6b8kijMbu10pZ9YcS3hyQSCtjn6xGhV3-RHpO6g"
                  />
                </div>
                <span className="font-label font-bold text-xs tracking-widest uppercase text-on-surface-variant">Sara Jules</span>
              </div>
              <h3 className="font-headline font-extrabold text-3xl tracking-tighter mb-4">Tonal Office</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">
                  Interior
                </span>
                <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">
                  Zen
                </span>
              </div>
              <Link className="font-headline font-bold text-xs tracking-widest uppercase flex items-center gap-2" to="#">
                Details <span className="material-symbols-outlined">north_east</span>
              </Link>
            </div>
          </article>

          <article className="md:col-span-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-4">
                <span className="bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full font-label font-bold text-[10px] tracking-widest uppercase">
                  Featured Project
                </span>
              </div>
              <h2 className="font-headline font-extrabold text-5xl sm:text-6xl tracking-tighter leading-[0.95] mb-8">
                Atmospheric
                <br />
                Concrete Residency
              </h2>
              <p className="font-body text-base sm:text-lg text-neutral-600 mb-10 leading-relaxed max-w-md">
                A masterclass in shadow work. Using raw concrete to channel the shifting coastal light throughout the day.
              </p>
              <div className="flex items-center gap-6 mb-12">
                <div className="flex -space-x-3">
                  <img
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-4 border-background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3pzjRFRwCxEfcEvqZu2bCie0rheo-J7QbrVb_gsJEoQ_F8cpvwowhK5A5PvjhkDg49SXGBZEv2XymGHB8VCFSxzE8KKVgYITqky_hJf7DUZQLK__TlU5IJzvTQ7rZdHTUNv0NlGThxh_bI4V04P-EpQL7r8qWodldkB6fuAKLvHG06uwLABoOzL_PHYSbT5ajwAKPfZvY1scRhTqiA6ofD1t4Z75iKaW7jj5LodjVu6VF0LWskbEwZNSnrlJs_G2AxSuKNIG0zQ"
                  />
                  <img
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-4 border-background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoc8zpt14_ikSCss6J3uxRQ0CHGJlIFU8TruR3VYQ2AAwUZVgc_RVvl6PzK9eAniMAe1wNeN--UFH5fh_X1e4HQayTUn051beTCVwfwmj5mG6E8lZePfmVIT3wX8mxysR7ZH2gTW6dmWevaMAGPPYkxcFfAdQIllemkIlVPsSqQVzLx_txFaE_2dthQK6IS3TrMp7n-to7EtfgfH1BxjOq2wW3uZ2Gi_LHr2CERy3J4UAAMAExiZyHkGdeIz_kGEzNpX4NohjOTA"
                  />
                </div>
                <div className="text-xs font-label font-bold tracking-widest uppercase text-on-surface-variant">
                  Created by Monolith Studio
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-primary text-on-primary px-10 py-5 rounded-xl font-headline font-bold text-sm tracking-widest uppercase"
                >
                  See Project
                </button>
              </div>
              <p className="mt-4 text-xs text-neutral-500 tracking-wide">
                Read-only view: you can browse portfolios, but you cannot create, edit, or delete projects here.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden h-[520px] sm:h-[600px] bg-surface-container">
              <img
                alt="Concrete Arch"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2ARxgx3JDqJWYNnxJPpySUb1OmKGO8HRf3aLibpK8o09mkM2HTlXbctV4s6lmXeAGKq38-2fHjo1o4dmlKjyORGAwFTKhlfyEHL869HKMaXhjfEBUe6e_ZQJHbGVgAF9puBPoKt8g8T6RDggzgX8dyElr5B8G4Mt3Jl7F-MZ580y5OY73dTU7_MMccXFsno3Vr5jemYlZcbIQS3yLgbw5XcLcPQ_s_U4qRbM0-kYHJsAap3oJvwoXKtaWdxm3DhEKcPQhrKTdfQ"
              />
            </div>
          </article>

          <article className="md:col-span-4 flex flex-col group">
            <div className="relative rounded-lg overflow-hidden aspect-[3/4] mb-8 bg-surface-container">
              <img
                alt="Wood Cabin"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8RuJVp7d1az968Qn01y0eNjOvCiiU9ycF_lGlYnJaZcb9yVoJp7ik476QBGJ_67FltsxU6_LDlBcY1rv0X2nYPYIGiSn-EA5HrP5IgTokTP2fkhA-ikEGyGVy76A_2n4sA8v1M90KQX5sMAMY-gLne9SJ4YHZ_9o10RWEz351HdVXni8jKz4mv_h2RTVw5bwfqX-yfzKQjEiAWdUitfjGjJ5AmtpBUWSvwVtdyeCLS1APQ-HagPhXkklNiIuyiTB5yrkYaAc-6Q"
              />
            </div>
            <div className="px-2">
              <span className="font-label font-bold text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-3 block">
                Cabin • Nordic
              </span>
              <h3 className="font-headline font-bold text-2xl tracking-tight mb-4 group-hover:underline underline-offset-4">
                The Nordic Shelter
              </h3>
              <div className="flex justify-between items-center pt-4 border-t border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-[10px] text-white font-bold">
                    M
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Marcus Thore</span>
                </div>
                <span className="material-symbols-outlined text-sm text-neutral-400">favorite</span>
              </div>
            </div>
          </article>

          <article className="md:col-span-4 flex flex-col group">
            <div className="relative rounded-lg overflow-hidden aspect-[3/4] mb-8 bg-surface-container">
              <img
                alt="Luxury Villa"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCERaYOzM2-7VuKV6N8jHh50xbItfKMpvc-Kxh366A0A-qsjHxB1-oBWhn_m6aap8bw_dDHv_aS4PFdMhAf_SdZ9PP1NhY8umlytSNAytkMbLjeNlMhbLUcv_18ko2w7EPSuCJFSNKgf_uPjueMqLzLoysRQG3Z2EL9ERjUn9fxIw-3v7hWGBTGuQ-ewdMwdyYlh_XW1Jfxq_12w-L31qm6HAmSemrmbYu-V7FzwX1CYnAvlaBYQUW0c3CreRPHFLr21CJ1sj8ruw"
              />
            </div>
            <div className="px-2">
              <span className="font-label font-bold text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-3 block">
                Villa • Minimal
              </span>
              <h3 className="font-headline font-bold text-2xl tracking-tight mb-4 group-hover:underline underline-offset-4">
                Horizon Point
              </h3>
              <div className="flex justify-between items-center pt-4 border-t border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-[10px] text-white font-bold">
                    L
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Lina Chen</span>
                </div>
                <span className="material-symbols-outlined text-sm text-neutral-400">favorite</span>
              </div>
            </div>
          </article>

          <article className="md:col-span-4 flex flex-col group">
            <div className="relative rounded-lg overflow-hidden aspect-[3/4] mb-8 bg-surface-container">
              <img
                alt="Abstract Stairs"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdW21v1j4B6b33fJIOBJA7-mPC1GjwHW0L22imP4cV9AGgTFwMWJntDPq6ap5ikl-FFjXMo0apXD5SUBtFok4R10gG3_7Xzp1R7EEKjrbcNm4UAO-b0aDrPWs8YlrTNyyzbIYIV9_82KCFLVVHAeVCL9TQDtQieOxo7WIH4KA35D1HzPh3TwXI9pq_aRICtx5uMllgaTf_g3N6cwjqyMfcuxm4QLETo-jPiDZoz4CrsNhdu-U5241vEN8w1b9lFAiTQ3oEpKf6fg"
              />
            </div>
            <div className="px-2">
              <span className="font-label font-bold text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-3 block">
                Concept • Form
              </span>
              <h3 className="font-headline font-bold text-2xl tracking-tight mb-4 group-hover:underline underline-offset-4">
                Vortex Geometry
              </h3>
              <div className="flex justify-between items-center pt-4 border-t border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-[10px] text-white font-bold">
                    D
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase">David Ross</span>
                </div>
                <span className="material-symbols-outlined text-sm text-neutral-400">favorite</span>
              </div>
            </div>
          </article>
        </section>

        <div className="mt-32 flex justify-center gap-4">
          <button
            type="button"
            className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            type="button"
            className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-headline font-bold"
          >
            1
          </button>
          <button
            type="button"
            className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all font-headline font-bold"
          >
            2
          </button>
          <button
            type="button"
            className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all font-headline font-bold"
          >
            3
          </button>
          <button
            type="button"
            className="w-14 h-14 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>

      <footer className="w-full border-t border-neutral-200/20 bg-neutral-50">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-16 mt-20 max-w-[1920px] mx-auto">
          <div className="font-body text-[10px] tracking-[0.2em] uppercase font-medium text-black mb-8 md:mb-0 opacity-80">
            © 2024 MONOLITH CURATED. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-12 font-body text-[10px] tracking-[0.2em] uppercase font-medium">
            <Link className="text-neutral-400 hover:text-black underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" to="#">
              Twitter
            </Link>
            <Link className="text-neutral-400 hover:text-black underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" to="#">
              LinkedIn
            </Link>
            <Link className="text-neutral-400 hover:text-black underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" to="#">
              Instagram
            </Link>
            <Link className="text-neutral-400 hover:text-black underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" to="#">
              Dribbble
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicPortfolio;

