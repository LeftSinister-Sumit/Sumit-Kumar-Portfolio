export default async function handler(
    req,
    res
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const formData = req.body;

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl || webhookUrl === "https://discord.com/api/webhooks/1504153199362314320/lxrFGicVNTO1slopU8jLpKCRRv6eZdCZwkHtCPWucFfxa-rITkwZimDXLA7KajGqWZlw") {
        console.warn(
            "DISCORD_WEBHOOK_URL is not configured. Message logged to console:",
            formData,
        );
        return res.status(200).json({ success: true, message: "Message received (unconfigured backend)" });
    }

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                embeds: [
                    {
                        title: `New Message: ${formData.subject}`,
                        description: formData.message,
                        color: 0x2dd4bf,
                        fields: [
                            {
                                name: "Name",
                                value: formData.name,
                                inline: true,
                            },
                            {
                                name: "Email",
                                value: formData.email,
                                inline: true,
                            },
                        ],
                        timestamp: new Date().toISOString(),
                        footer: {
                            text: "Portfolio Contact Form",
                        },
                    },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to send message: ${response.statusText}`);
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error submitting message:", error);
        return res.status(500).json({ success: false, error: "Failed to send message." });
    }
}