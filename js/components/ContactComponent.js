export default {
    template: `
    <section id="contact">
        <h2 class="main-heading">Let's create together..</h2>
        <p class="contact-text">You can use this contact form to get in touch. Whether it's for a project or just to say hi, I'll do my best to get back to you within 2 business days.</p>
        <form @submit.prevent="handleMail" id="form" action="includes/contact.php" method="POST">
            <label for="name">Name:</label>
            <input v-model="input.name" id="name" type="text" name="name" value="" placeholder="e.g. Harry Potter" required>

            <label for="email">Email:</label>
            <input v-model="input.email" id="email" type="email" name="email" value="" placeholder="e.g. harry@hogwarts.edu" required>

            <label for="subject">Subject:</label>
            <input v-model="input.subject" id="subject" type="text" name="subject" value="" placeholder="e.g. Spells" required>

            <label for="message">Message:</label>
            <textarea v-model="input.message" id="message" name="message" value="" Placeholder="I'd like to say..." rows="11" required></textarea>

            <button class="submit-btn" type="submit">Submit</button>
        </form>

        <div v-if="formmsg" class="form-msg"><p>{{ formmsg }}</p></div>
        
    </section>
    `,

    data() {
        return {
            input: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            formmsg: ''
        }
    },

    methods: {    
        handleMail() {
            if(this.input.name !=='' && this.input.email !=='' && this.input.subject !=='' && this.input.message !=='' ) {
                let url = './includes/contact.php',
                    formdata = new FormData(document.querySelector('#form')),
                    maildata = {};

                    for (let [key, value] of formdata.entries()) {
                        maildata[key] = value;
                    }

                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-type': 'application/json'
                        },
            
                        body: JSON.stringify(maildata)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        this.formmsg = data;
                        setTimeout(function(){ this.formmsg = ''; }, 4000);
                    })
                    .catch(err => console.log(err));
            } else {
                this.formmsg = 'Looks like some fields are empty!';
                setTimeout(function(){ this.formmsg = ''; }, 4000);
            }
        }
    }
}