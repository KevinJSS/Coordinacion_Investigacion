import {
    Controller
} from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["template", "add_item", "reference"];
    agreementsAdded;

    connect() {
        this.agreementsAdded = false;
    }

    add_association(event) {
        event.preventDefault();
        var content = '<div class="mt-3">';
        content += this.templateTarget.innerHTML.replace(/TEMPLATE_RECORD/g, Math.floor(Math.random() * 20));
        content += '</div>';
        this.referenceTarget.insertAdjacentHTML('beforeend', content);
    }

    remove_association(event) {
        event.preventDefault();
        let item = event.target.closest(".nested-fields");
        item.querySelector("input[name*='_destroy']").value = 1;
        //item.style.display = 'none';
        item.remove();
    }

    add_agreements(event) {
        event.preventDefault();
        if (!this.agreementsAdded) {
            alert("Adding agreements");
        }
        this.agreementsAdded = true;
        var content = '<div class="mt-3">';
        content += this.templateTarget.innerHTML.replace(/TEMPLATE_RECORD/g, Math.floor(Math.random() * 20));
        content += '</div>';
        this.referenceTarget.insertAdjacentHTML('beforeend', content);
    }
}