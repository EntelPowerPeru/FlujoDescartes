const EVENTOS = {
    init() {
        this.seleccionarCanal();
    },
    seleccionarCanal() {
        $("body").on("change", "#filtro_canal", (evento) => {
            if (!$(evento.currentTarget).val()) {
                return false;
            }

            const valor = $(evento.currentTarget).val();

            switch (valor) {
                case "1":
                    window.location = "./tlv-outbound.html";
                    break;
                case "2":
                    window.location = "./fidelizacion.html";
                    break;
                case "3":
                    window.location = "./fonocompras-fonoislas.html";
                    break;
                case "4":
                    window.location = "./digital-asistido.html";
                    break;
            }
        });
    }
};

(() => {
    EVENTOS.init();
})();