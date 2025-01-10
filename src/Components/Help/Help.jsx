import React from 'react'
import './Help.css'

function Help() {
    return (
        <div class="help-container">
            <header class="help-header">
                <h1>Help Center</h1>
                <p>We’re here to assist you! Please reach out to us if you have any questions or issues.</p>
            </header>

            <div class="help-body">
                {/* <!-- Email Us Section --> */}
                <div class="help-section">
                    <h2>Email Us</h2>
                    <p>If you prefer email, feel free to reach out to us at:</p>
                    <p><strong>support@funshop.com</strong></p>
                </div>

                {/* <!-- Problem Description Section --> */}
                <div class="help-section">
                    <h2>Describe Your Problem</h2>
                    <textarea class="help-textarea" placeholder="Please describe your issue here..."></textarea>
                    <button class="submit-btn">Submit Problem</button>
                </div>

                {/* <!-- Live Chat Section --> */}
                <div class="help-section">
                    <h2>Live Chat</h2>
                    <div class="chat-container">
                        <header class="chat-header">
                            <h1>Customer Support</h1>
                        </header>

                        <div class="chat-body">
                            {/* <!-- Messages will go here --> */}
                            <div class="chat-messages">
                                <div class="message user-message">
                                    <p>Hi, I need help with my order.</p>
                                </div>
                                <div class="message agent-message">
                                    <p>Sure! Can you provide your order number?</p>
                                </div>
                            </div>
                        </div>

                        <div class="chat-input-area">
                            <input type="text" class="chat-input" placeholder="Type a message..." />
                            <button class="send-btn">Send</button>
                        </div>
                    </div>

                </div>
            </div>

            <footer class="help-footer">
                <p>For urgent matters, please call our customer support hotline at: +1 800-555-1234</p>
            </footer>
        </div>


    )
}

export default Help