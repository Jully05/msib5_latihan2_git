document.addEventListener("DOMContentLoaded", function() {
    const hitungButton = document.getElementById("hitungButton");
    const resultTable = document.querySelector("#resultTable tbody");

    hitungButton.addEventListener("click", function() {
        const nama = document.getElementById("nama").value;
        const matkul = document.getElementById("matkul").value;
        const grade = document.getElementById("grade").value;

        let nilai = 0;
        switch (grade) {
            case "A":
                nilai = 4;
                break;
            case "B":
                nilai = 3;
                break;
            case "C":
                nilai = 2;
                break;
            case "D":
                nilai = 1;
                break;
            case "E":
                nilai = 0;
                break;
        }

        const newRow = resultTable.insertRow();
        const cellNama = newRow.insertCell(0);
        const cellMatkul = newRow.insertCell(1);
        const cellGrade = newRow.insertCell(2);
        const cellNilai = newRow.insertCell(3);

        cellNama.textContent = nama;
        cellMatkul.textContent = matkul;
        cellGrade.textContent = grade;
        cellNilai.textContent = nilai;

        document.getElementById("nama").value = "";
        document.getElementById("matkul").value = "";
    });
});
