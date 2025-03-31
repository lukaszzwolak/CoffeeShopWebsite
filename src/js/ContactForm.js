import { postContact } from '../api/contact.js';

export class ContactForm {
    constructor(formElement) {
        this.form = formElement;
        this.message = this.form.querySelector('.form-message');
        this.addSubmitHandler();
    }

    addSubmitHandler() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = this.form.querySelector('#name').value.trim();
            const title = this.form.querySelector('#title').value.trim();
            const message = this.form.querySelector('#message').value.trim();

            if (name && title && message) {
                const contactData = { name, title, message };

                postContact(contactData, () => {
                    this.displayMessage('✅ Message sent successfully!', 'success');
                    this.form.reset();
                });
            } else {
                this.displayMessage('⚠️ Please fill in all fields.', 'error');
            }
        });
    }

    displayMessage(text, type) {
        this.message.textContent = text;
        this.message.classList.remove('success', 'error');
        this.message.classList.add(type);
        this.message.style.display = 'block';

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.message.style.display = 'none';
            this.message.classList.remove('success', 'error');
        }, 4000);
    }
}
