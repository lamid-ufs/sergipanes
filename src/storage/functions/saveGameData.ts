const saveGameData = (data: string) => {
  const savedData = JSON.parse(localStorage.getItem("gameHistory") || "[]");
  savedData.push(data);
  localStorage.setItem("gameHistory", JSON.stringify(savedData));
};

const getFormattedDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}-${month}-${year}`;
};

const exportGameHistory = () => {
  const savedData = JSON.parse(localStorage.getItem("gameHistory") || "[]");
  const blob = new Blob([savedData.join("\n\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const date = getFormattedDate();
  const a = document.createElement("a");
  a.href = url;
  a.download = `sergipanes_${date}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export { saveGameData, exportGameHistory };
