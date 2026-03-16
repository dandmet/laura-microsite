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
      } else {
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

    await navigator.clipboard.writeText(shareMessage);
    alert("Share message copied. Thank you for helping Laura’s story travel.");
  };

  return (
    <div style={{fontFamily:"Arial, sans-serif",lineHeight:"1.6",padding:"40px",maxWidth:"900px",margin:"auto"}}>

      <h1>Help Laura Find a Living Kidney Donor</h1>

      <img
        src="/laura.jpg"
        alt="Laura"
        style={{width:"100%",maxWidth:"500px",borderRadius:"12px",marginBottom:"20px"}}
      />

      <p>
        Laura urgently needs a living kidney donor. After years of living with autoimmune disease,
        Lupus has caused her kidneys to fail and she is now in Stage 5 kidney failure.
      </p>

      <p>
        Laura has spent many years managing Rheumatoid Arthritis and Lupus with resilience and determination.
        Despite the challenges of chronic illness, she continues to focus on the things that matter most to her —
        family, connection, and appreciating each day she is given.
      </p>

      <p>
        Her doctors have scheduled surgery for dialysis soon while she waits for a transplant.
      </p>

      <p>
        Because Laura’s blood type is O+, the wait for a deceased donor kidney in Southern California can often be
        7–10 years — time she may not have.
      </p>

      <p>
        A living kidney donor could save Laura’s life and give her the chance to regain her strength,
        travel, and spend meaningful time with the people she loves.
      </p>

      <h2>Learn About Living Kidney Donation</h2>

      <p>
        If you are willing to learn more about becoming a living kidney donor, please visit the official Scripps
        donor page:
      </p>

      <p>
        <a href={scrippsUrl} target="_blank">
          https://www.scrippslivingdonor.org/
        </a>
      </p>

      <h2>How You Can Help</h2>

      <ul>
        <li>Learn about living kidney donation</li>
        <li>Share Laura’s story</li>
        <li>Help this page reach the person who could save her life</li>
      </ul>

      <div style={{marginTop:"30px"}}>
        <button onClick={shareLauraStory} style={{marginRight:"10px",padding:"10px 20px"}}>
          Share Laura's Story
        </button>

        <button onClick={copyShareMessage} style={{padding:"10px 20px"}}>
          Copy Message
        </button>
      </div>

    </div>
  );
}