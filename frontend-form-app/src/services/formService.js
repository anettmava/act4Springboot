export async function submitFormData(formData) {
  console.log("[FormAPI] Request POST /api/form/submit", formData);

  const response = await fetch("/api/form/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  const contentType = response.headers.get("content-type") || "";
  const payload = contentType.includes("application/json")
    ? await response.json()
    : { message: await response.text() };

  console.log("[FormAPI] Response", {
    status: response.status,
    ok: response.ok,
    payload
  });

  if (!response.ok) {
    throw new Error(payload.message || "No se pudo enviar el formulario al backend");
  }

  return payload;
}
