import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [
    "art_template",
    "agr_template",
    "art_reference",
    "agr_reference",
  ];
  articleCounter = 0;

  connect() {
    console.log("RecordFormsController connected");
  }

  add_article(event) {
    event.preventDefault();
    this.articleCounter++;

    let content = `<div class="mt-3" id="ART${this.articleCounter}">`;
    content += this.art_templateTarget.innerHTML;
    content += "</div>";

    this.art_referenceTarget.insertAdjacentHTML("beforeend", content);
  }

  remove_article(event) {
    event.preventDefault();
    document.getElementById(event.path[5].id).remove();
  }

  add_agreement(event) {
    event.preventDefault();
    var article_div_id = (event.path[5].id === "" ? event.path[6].id : event.path[5].id);
    var reference = document.getElementById(article_div_id).querySelector(".agr-reference");

    console.log(reference.children.length);

    var content = '<div class="mt-3">';
    content += this.agr_templateTarget.innerHTML.replace(
      /TEMPLATE_RECORD/g,
      Math.floor(Math.random() * 20)
    );
    content += '</div>';

    reference.insertAdjacentHTML("beforeend", content);
  }

  remove_agreement(event) {
    event.preventDefault();
  }
}
