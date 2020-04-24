export default {
    template: `
    <section id="contact">
        <h2 class="main-heading">Let's create together..</h2>
        <p class="contact-text">You can use this contact form to get in touch. Whether it's for a project or just to say hi, I'll do my best to get back to you within 2 business days.</p>
        <form id="form" action="includes/contact/data_contact.php" method="POST">
            <label for="u-name">Name:</label>
            <input id="u-name" type="text" name="name" value="" placeholder="e.g. Harry Potter" required>

            <label for="u-email">Email:</label>
            <input id="u-email" type="email" name="email" value="" placeholder="e.g. harry@hogwarts.edu" required>

            <label for="u-subject">Subject:</label>
            <input id="u-subject" type="text" name="subject" value="" placeholder="e.g. Spells" required>

            <label for="u-message">Message:</label>
            <textarea id="u-message" name="message" value="" Placeholder="I'd like to say..." rows="11" required></textarea>

            <button class="submit-btn" type="submit">Submit</button>
        </form>

        <div class="form-msg"><p></p></div>
        
    </section>
    `
}