import { Link } from 'react-router-dom';
import MonolithNav from '../components/MonolithNav';

const Home = () => {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface antialiased selection:bg-black selection:text-white">
      <MonolithNav />

      <main className="pt-32 pb-24 px-8 md:px-12 max-w-[1920px] mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Workspace / Dashboard
            </p>
            <h1 className="text-6xl sm:text-7xl font-black tracking-tighter leading-none text-black font-headline">
              Your projects
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold flex items-center gap-3 hover:opacity-90 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">add</span>
              Create New Project
            </button>
            <button
              type="button"
              className="p-4 bg-surface-container-low text-primary rounded-xl hover:bg-surface-container-high transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </header>

        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24">
            <div className="group flex flex-col">
              <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-surface-container">
                <img
                  alt="Monolith Villa"
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIGar9qQDpNDHcwjb7ZlaE9dIhN_N4x7Q0PwU2RZh4BSzjUEVJltvxGYfEMK_WN7U-U-pz44cIll7ya3OcKr7tZWOw5QP83WvqYbK7hS00_rGZxQOL797WJ_op7ZF0ZkU6GSAZhOYC6WQSgRcVhP8FLwIggmN14pPaunCmjiVn73qj7wfsDFgV08K5Y3XwNmllzUJs87CXLsaJq3vcZAl4IEtkyokBRCTqwzZu4uYqn6BiuZzWvOXgZEBKf1ypgEN_GgReOFi8mw"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    ARCHITECTURE
                  </span>
                </div>
              </div>
              <div className="-mt-12 ml-12 p-10 bg-surface-container-lowest shadow-ambient relative z-10 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight mb-1 font-headline">Monolith Villa</h3>
                    <p className="text-xs text-neutral-400 font-medium">Last edited: Oct 12, 2024</p>
                  </div>
                  <div className="flex gap-2">
                    <button type="button" className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-neutral-600">edit</span>
                    </button>
                    <button type="button" className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-neutral-600">share</span>
                    </button>
                    <button type="button" className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-error">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                <p className="text-on-surface-variant font-body leading-relaxed max-w-md">
                  A residential exploration of concrete mass and light penetration in the Swiss Alps. Focusing on thermal mass
                  and aesthetic silence.
                </p>
              </div>
            </div>

            <div className="group flex flex-col">
              <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-surface-container">
                <img
                  alt="Aura OS"
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBpdkS25AEjR80iHPGKQ_d40VHfKbfTW6MH7vKOaGPSxBiiCpGvqJolC3ROBW0cl7XLvoeQBeck-Hoq8-gEQLQlNt9qzuQGp6HfX5I093B0NacUrn7em5f_HuE24Av0LjFDch3VeT2wfB3IG_MdJ-gvqFuIfceW0JKIES7Smaa3PNuMfIN2mNOfB51v0Wj-uH2CjIDdvBXl0WYyqe-_Z13ddvoLWMshOa4222FOkZ13Q-9FYdlkFM7GF-9oHe-o-zim6FCXblIwA"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    INTERFACE
                  </span>
                </div>
              </div>
              <div className="-mt-12 ml-12 p-10 bg-surface-container-lowest shadow-ambient relative z-10 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight mb-1 font-headline">Aura OS</h3>
                    <p className="text-xs text-neutral-400 font-medium">Last edited: Sep 28, 2024</p>
                  </div>
                  <div className="flex gap-2">
                    <button type="button" className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-neutral-600">edit</span>
                    </button>
                    <button type="button" className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-neutral-600">share</span>
                    </button>
                    <button type="button" className="p-2 hover:bg-surface-container-low rounded-lg transition-colors text-error">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                <p className="text-on-surface-variant font-body leading-relaxed max-w-md">
                  Defining the next generation of spatial operating systems. An interface that disappears into the architectural
                  environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-40">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-2 font-headline">Curated for You</h2>
              <p className="text-on-surface-variant font-medium">Exceptional works from the global Monolith collective.</p>
            </div>
            <Link className="font-headline font-bold border-b-2 border-black pb-1 hover:opacity-60 transition-opacity" to="#">
              Explore All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group cursor-pointer">
              <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-6">
                <img
                  alt="Obsidian Tower"
                  className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Um-huAHUqaE51YExKrvuHh7vcf2F8mstr2pQjalkgHBLkzj2C6h14hmETd2Ro3F5X1Lz0pfb96Hbqo8dQnZypGNKK7NmgpohwihtdthLFS2l365LK6rdoevLDEl7j09ougRv0x1HDmfm_j--r7vWYhAhePpbw4pMZkaWeEx3OySxuSY-fRcRwDSECjlbLNfb7AO2l515Ve61LUGCfhR9aFz71wSasAR3w-Bl3gBGM9hBHaYTDjKFC0DbVe7rDkPn05dYJYTM_g"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-1">Marcus Thorne</p>
                  <h4 className="text-xl font-bold tracking-tight font-headline">Obsidian Tower</h4>
                </div>
                <span className="material-symbols-outlined text-neutral-400 group-hover:text-black transition-colors">
                  arrow_outward
                </span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-6">
                <img
                  alt="Light Echoes"
                  className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7hItSVM-SrWbAda3uM-cmlmqwEw4hdHK6yg0cZwLk271mM4CObij1EPI80MSrHCjtAHyeeqh1BgPtoKYC8OBo8oKIQb74j2AV4s1GuFVpu22LLO0TCFezTTPHLmvug_z32yomC5piOuvVeOvqkB5xqS5m0WGSWyEYtztUd2DZoXADYwy_joya2azyNqre06z7hCqqEF305PUiNAsVDpDluxLnNk_jFktX_bGnd15alRpiJWZRT1D6YUOuBMVQgVKHIkKlqtEJg"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-1">Elena Rostova</p>
                  <h4 className="text-xl font-bold tracking-tight font-headline">Light Echoes</h4>
                </div>
                <span className="material-symbols-outlined text-neutral-400 group-hover:text-black transition-colors">
                  arrow_outward
                </span>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-6">
                <img
                  alt="Velvet Void"
                  className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc0pvPbgUY0FyESy_uR3I_A6_4kSm4Lv_38QnNAGPfc_3gsLrDTt7RybT8q_RkAwvc-RmMklbGmL30PfXBuIaSgHS5IyOCsGmBr0f5kUsEev_y77RyoPlXxNHur-omAPup9z07uGqgj9H5K1qhu5-vSV50J_lNvlS4F689rV0Ids6hszLlRHW_xRqT2QIYQqbwuqAB7bJdIL4K9Ejsl2OdXhc3xrz11v4csoX2xUMiXosYEGkbyUxSwpYmVSaAPOhF_ZSDZeya2A"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-1">Satoshi Nakamoto</p>
                  <h4 className="text-xl font-bold tracking-tight font-headline">Velvet Void</h4>
                </div>
                <span className="material-symbols-outlined text-neutral-400 group-hover:text-black transition-colors">
                  arrow_outward
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-50 w-full py-20 px-8 md:px-12 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-6">
            <div className="font-headline font-black text-lg text-black">MONOLITH</div>
            <p className="font-body text-xs font-medium tracking-widest uppercase text-neutral-400">
              © 2024 MONOLITH. THE CURATED MONOLITH.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h5 className="font-body text-xs font-bold tracking-widest uppercase text-black mb-2">Platform</h5>
              <Link className="font-body text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-black transition-colors" to="#">
                Journal
              </Link>
              <Link className="font-body text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-black transition-colors" to="#">
                Archive
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="font-body text-xs font-bold tracking-widest uppercase text-black mb-2">Legal</h5>
              <Link className="font-body text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-black transition-colors" to="#">
                Privacy
              </Link>
              <Link className="font-body text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-black transition-colors" to="#">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-8 pt-4 bg-white/90 backdrop-blur-md shadow-[0px_-10px_30px_rgba(0,0,0,0.05)] md:hidden rounded-t-3xl">
        <Link className="flex flex-col items-center justify-center text-neutral-400" to="/">
          <span className="material-symbols-outlined mb-1">grid_view</span>
          <span className="font-body text-[10px] uppercase tracking-[0.1em]">Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-black bg-neutral-100 rounded-2xl px-5 py-2" to="/portfolio">
          <span className="material-symbols-outlined mb-1">layers</span>
          <span className="font-body text-[10px] uppercase tracking-[0.1em]">Works</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-neutral-400" to="/my-skill">
          <span className="material-symbols-outlined mb-1">auto_awesome</span>
          <span className="font-body text-[10px] uppercase tracking-[0.1em]">My Skill</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-neutral-400" to="/profile">
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-body text-[10px] uppercase tracking-[0.1em]">Me</span>
        </Link>
      </nav>
    </div>
  );
};

export default Home;

