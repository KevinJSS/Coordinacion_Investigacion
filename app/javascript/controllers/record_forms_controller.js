import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [
    "art_template",
    "agr_template",
    "art_reference",
    "agr_reference",
    "agr_header"
  ];
  articleCounter = 0;

  connect() {
    console.log("RecordFormsController connected");
  }

  add_article(event) {
    event.preventDefault();
    this.articleCounter++;

    let content = `<div class="mt-5" id="ART${this.articleCounter}">`;
    content += this.art_templateTarget.innerHTML;
    content += "</div>";

    this.art_referenceTarget.insertAdjacentHTML("beforeend", content);
  }

  remove_article(event) {
    event.preventDefault();
    console.log(event.path[5].id);
    document.getElementById(event.path[5].id).remove();
  }

  add_agreement(event) {
    event.preventDefault();
    var article_div_id = (event.path[5].id === "" ? event.path[6].id : event.path[5].id);
    var reference = document.getElementById(article_div_id).querySelector(".agr-reference");

    var content = `<div class="mt-4" id="${article_div_id}-AGR${reference.children.length + 1}">`;

    if (reference.children.length + 1 === 1) {
      content += '<h6 style="margin: 2rem 0 2rem 1.8rem">ACUERDOS</h6>';
    }

    content += this.agr_templateTarget.innerHTML.replace(
      /TEMPLATE_RECORD/g,
      Math.floor(Math.random() * 20)
    );
    content += '</div>';

    reference.insertAdjacentHTML("beforeend", content);
    
    var agr_input = document.getElementById(`${article_div_id}-AGR${reference.children.length}`).querySelector("#AGREEMENT_NUMBER");
    agr_input.value = `${article_div_id}. Acuerdo ${reference.children.length}`;
  }

  remove_agreement(event) {1
    event.preventDefault();
    var agr_div_id = (event.path[5].id === "" ? event.path[6].id : event.path[5].id);
    document.getElementById(agr_div_id).remove();// FIX!! Considerar el hecho del children.length para el proximo elemento que se agrega.
  }
}
