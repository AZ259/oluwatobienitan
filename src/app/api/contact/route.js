export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    // Log the contact submission (replace with email service in production)
    console.log("Contact submission:", { name, email, subject, message });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
