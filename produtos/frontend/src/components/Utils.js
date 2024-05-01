class Utils {
    static formatarMoeda(valor) {
        if (!valor) {
            valor = 0.0;
        }
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
}


export default Utils;