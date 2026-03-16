export default function LauraKidneyMicrosite() {
  const scrippsUrl = "https://www.scrippslivingdonor.org/";

  const shareLauraStory = async () => {
    const shareData = {
      title: "Help Laura Find a Living Kidney Donor",
      text: "Laura urgently needs a living kidney donor. Please read her story and share it if you can.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied. Thank you for sharing Laura’s story.");
      }
    } catch {}
  };

  const copyShareMessage = async () => {
    const shareMessage = `A friend of mine urgently needs a living kidney donor.

Laura is in Stage 5 kidney failure caused by Lupus and will soon begin dialysis while waiting for a transplant.

Because her blood type is O+, the wait for a deceased donor kidney in Southern California can be 7–10 years.

If you are willing to learn about living kidney donation, or even just share her story, please visit this page.

${window.location.href}`;

    try {
      await navigator.clipboard.writeText(shareMessage);
      alert("Share message copied. Thank you for helping Laura’s story travel.");
    } catch {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-sky-50 pb-24 text-slate-900 md:pb-0">
      <header className="sticky top-0 z-20 border-b border-white/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-600">
              Living Kidney Donor Awareness
            </p>
            <h1 className="text-lg font-bold sm:text-xl">
              Help Laura Find a Living Kidney Donor
            </h1>
          </div>
          <a
            href={scrippsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
          >
            Learn About Donation
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold text-rose-600">
              Laura’s donor may already be in your network — they just haven’t seen her story yet.
            </p>

            <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Help Laura Find a Living Kidney Donor
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Laura urgently needs a living kidney donor after Lupus caused her kidneys to fail.
              Because her blood type is O+, the wait for a deceased donor in Southern California
              can be 7–10 years — time she may not have. Learning about living kidney donation
              or sharing her story could help her find the person who saves her life.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={scrippsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5"
              >
                Learn About Becoming a Living Donor
              </a>

              <button
                type="button"
                onClick={shareLauraStory}
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm"
              >
                Share Laura’s Story
              </button>
            </div>

            <p className="mt-6 text-sm text-slate-600">
              Learning more does not commit you to donating — it simply helps you see if living
              kidney donation might be right for you.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-rose-100">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <img
                src="/laura.jpg"
                alt="Laura"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm uppercase tracking-wide opacity-90">
                  Living Kidney Donor Needed
                </p>
                <h3 className="mb-3 text-xl font-bold">
                  Help Laura Find a Kidney Donor
                </h3>
                <a
                  href={scrippsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-rose-700"
                >
                  See If You Could Be Laura&apos;s Donor
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 pb-8 text-center text-sm text-slate-600">
          Even if donating isn&apos;t possible, sharing this page could help Laura find the person
          who can save her life.
        </div>

        <section className="mx-auto max-w-5xl px-4 pb-10">
          <div className="mb-8 rounded-2xl bg-rose-50 p-4 text-center text-sm text-slate-700 ring-1 ring-rose-100">
            <p className="font-semibold">Official Living Donor Program</p>
            <p className="mt-1">
              All donor screening and medical evaluation is handled through the Scripps Transplant Program.
            </p>
            <p className="mt-1">
              You can learn more and decide privately whether living donation might be right for you.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold">Could I Be a Kidney Donor?</h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="font-semibold">You may be able to donate if you:</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>• Are generally healthy</li>
                  <li>• Are typically between 18–65</li>
                  <li>• Want to learn more about living donation</li>
                </ul>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="font-semibold">Important to know:</p>
                <p className="mt-2 text-sm text-slate-700">
                  You do not have to be Laura’s blood type to help. Programs like paired kidney
                  exchange can sometimes match donors even if they are not a direct match.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={scrippsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow"
              >
                Learn More at Scripps Living Donor Program
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-10">
          <div className="rounded-3xl bg-white p-8 shadow ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold">What Happens If I Decide to Learn More?</h3>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="font-semibold">1. Visit the Scripps donor page</p>
                <p className="mt-2 text-sm text-slate-700">
                  You can read about living kidney donation and decide if learning more feels right for you.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="font-semibold">2. Complete a confidential screening</p>
                <p className="mt-2 text-sm text-slate-700">
                  If you choose, you can complete a short health questionnaire. This simply helps
                  the transplant team see if donation might be possible.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="font-semibold">3. Decide what feels right</p>
                <p className="mt-2 text-sm text-slate-700">
                  There is no obligation to donate. The process is designed to help you learn and
                  make the best decision for you.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-600">
              Learning more does not commit you to donating — it simply helps you see if living
              kidney donation might be right for you.
            </p>

            <div className="mt-6">
              <a
                href={scrippsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow"
              >
                Learn More About Living Kidney Donation
              </a>
            </div>
          </div>
        </section>

        <section id="story" className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-3xl bg-white p-8 shadow ring-1 ring-slate-200">
            <h3 className="mb-4 text-2xl font-bold">Laura’s Story</h3>

            <p className="leading-7 text-slate-700">
              Laura urgently needs a living kidney donor. After years of living with autoimmune
              disease, Lupus has caused her kidneys to fail and she is now in Stage 5 kidney failure.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Laura has spent many years managing Rheumatoid Arthritis and Lupus with resilience and
              determination. Despite the challenges of chronic illness, she continues to focus on the
              things that matter most to her — family, connection, and appreciating each day she is given.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Her doctors have scheduled surgery for dialysis soon while she waits for a transplant.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              Because Laura’s blood type is O+, the wait for a deceased donor kidney in Southern
              California can often be 7–10 years — time she may not have.
            </p>

            <p className="mt-4 leading-7 text-slate-700">
              A living kidney donor could save Laura’s life and give her the chance to regain her
              strength, travel, and spend meaningful time with the people she loves.
            </p>

            <p className="mt-4 leading-7 font-medium text-slate-700">
              If you are willing to learn more about becoming a living kidney donor, please visit the
              official Scripps donor page linked on this site. Even if donating isn’t possible for you,
              sharing Laura’s story could help it reach the person who can help.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-10">
          <div className="rounded-3xl bg-white p-8 shadow ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold">How You Can Help Laura Today</h3>

            <div className="mt-6 space-y-4 text-slate-700">
              <p>
                <strong>1. Learn About Living Kidney Donation</strong>
                <br />
                Visit the official Scripps donor site to learn about the process and see if becoming a donor might be possible for you.
              </p>

              <p>
                <strong>2. You Don’t Have to Be a Match</strong>
                <br />
                Even if your blood type isn’t compatible, paired kidney exchange programs may still allow your donation to help Laura receive a kidney.
              </p>

              <p>
                <strong>3. Share Laura’s Story</strong>
                <br />
                Even if donating isn’t possible for you, sharing this page could help it reach the person who can save her life.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-10">
          <div className="rounded-3xl bg-white p-8 shadow ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold">Is Living Kidney Donation Safe?</h3>

            <p className="mt-4 leading-7 text-slate-700">
              Thousands of people donate a kidney every year and continue to live full, healthy lives
              with one kidney. Potential donors go through a thorough medical evaluation to help ensure
              donation is safe for them.
            </p>

            <p className="mt-3 text-slate-700">
              All screening and testing is confidential and handled through the Scripps transplant team.
            </p>
          </div>
        </section>

        <section id="share" className="mx-auto max-w-5xl px-4 py-10">
          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <h3 className="text-2xl font-bold">Share Laura’s Story</h3>

            <p className="mt-4 text-slate-200">
              Most living kidney donors are found through personal networks. Sharing Laura’s story
              could help it reach the person who can save her life.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={shareLauraStory}
                className="rounded-xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow"
              >
                Share Laura’s Story
              </button>
              <button
                type="button"
                onClick={copyShareMessage}
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20"
              >
                Copy Message
              </button>
            </div>

            <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm leading-7 text-slate-100 whitespace-pre-line">
{`A friend of mine urgently needs a living kidney donor.

Laura is in Stage 5 kidney failure caused by Lupus and will soon begin dialysis while waiting for a transplant.

Because her blood type is O+, the wait for a deceased donor kidney in Southern California can be 7–10 years.

If you are willing to learn about living kidney donation, or even just share her story, please visit this page.`}
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white p-3 md:hidden">
        <a
          href={scrippsUrl}
          target="_blank"
          rel="noreferrer"
          className="block w-full rounded-lg bg-rose-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg"
        >
          Learn About Becoming a Donor
        </a>
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Thank you for helping Laura’s story travel.</p>
          <a
            href={scrippsUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-rose-600"
          >
            Visit Scripps Living Donor Program
          </a>
        </div>
      </footer>
    </div>
  );
}