const pricing = document.querySelector(".package");

(function main() {
  fetch("./assets/data.json", { mode: "no-cors" })
    .then(response => {
      return response.json();
    })
    .then(data => {
      let markup = data.map((item, index) => {
        return `
        <div class="package-${index + 1} card">
          <div itemprop="name" content="${
            item.nama
          } hosting package" class="paket" >${item.nama}</div>
          <div itemprop="offers" itemscope itemtype="http://schema.org/Offer" class="harga" >
            <span itemprop="priceCurrency" content="IDR"></span>
            <div itemprop="price" content="16000">Rp. ${item.harga}</div>
            <p>/Month<p>
          </div>
          <div itemprop="description" class="fitur" >
            <p><strong>${item.space}</strong> Space<p>
            <p><strong>${item.bandwidth}</strong> Bandwidth<p>
            <p><strong>${item.website}</strong> Website<p>
            <p><strong>${item.email}</strong> Email<p>
            ${item.domain ? "<p>Free Domain</p>" : ""}
            ${item.ssh ? "<p>SSH Access</p>" : ""}
          </div>
          <button>Order</button>
        </div>
        `;
      });
      return markup;
    })
    .then(html => {
      html.forEach(item => {
        pricing.innerHTML += item;
      });
    })
    .catch(err => {
      console.log(err);
    });
})();
