
const SUPABASE_URL = 'https://syanmwmnwtpsrtcastwi.supabase.co';
const SUPABASE_KEY = 'YOUR_PUBLIC_KEY';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

async function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("الرجاء ملء الحقول المطلوبة");
    return;
  }

  const { error } = await db.from('messages').insert([
    { name, email, message, created_at: new Date() }
  ]);

  if (error) {
    alert("حدث خطأ: " + error.message);
  } else {
    alert("تم الإرسال بنجاح ✅");
    document.getElementById('contact-form').reset();
  }
}
