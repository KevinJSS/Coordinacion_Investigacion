import {
    Controller
} from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["template", "add_item", "reference", "agr_header", "agr_reference", "agr_template"];
    agreement_counter = 0;

    add_association(event) {
        event.preventDefault();
        var content = '<div class="mt-3">';
        content += this.templateTarget.innerHTML.replace(/TEMPLATE_RECORD/g, Math.floor(Math.random() * 20));
        content += '</div>';
        this.referenceTarget.insertAdjacentHTML('beforeend', content);
        this.agr_headerTarget.style.display = 'none';
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
        this.agreement_counter++;
        if (this.agreement_counter == 1) {
            this.agr_headerTarget.style.display = 'block';
        }
        //console.log(this.agreement_counter);
        var content = '<div class="">';
        content += this.agr_templateTarget.innerHTML.replace(/TEMPLATE_RECORD/g, Math.floor(Math.random() * 20));
        content += '</div>';
        this.agr_referenceTarget.insertAdjacentHTML('beforeend', content);
    }

    remove_agreements(event) {
        event.preventDefault();
        this.agreement_counter--;
        if (this.agreement_counter == 0) {
            this.agr_headerTarget.style.display = 'none';
        }
        let item = event.target.closest(".nested-fields");
        //item.querySelector("input[name*='_destroy']").value = 1;
        //item.style.display = 'none';
        item.remove();
    }
}