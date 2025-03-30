import { postContact } from '../api/contact.js';

export class ContactForm {
    constructor(container) {
        this.form = container.querySelector('.contact-form');

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            const data = {
                name: this.form.querySelector('#name').value,
                title: this.form.querySelector('#title').value,
                message: this.form.querySelector('#message').value,
            };

            postContact(data, () => {
                alert('Thanks! Your message has been sent.');

                this.form.reset();
            });
        });
    }
}
