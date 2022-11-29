//var form_type = document.getElementById("form_type");

document.addEventListener('DOMContentLoaded', formDP => {
    document.forms.f_denuncias.addEventListener('change', formDP => {
    if (formDP.target.name == 'f_type') {
        let f_type = new Boolean(parseString(formDP.target.form.f_type.value));
        formDP.target.form.f_dpers.disabled = f_type.valueOf();
    }
    });
});


document.addEventListener('DOMContentLoaded', e => {
    document.forms.form01.addEventListener('change', e => {
        if (e.target.name == 'yesOrNo') {
            let yesOrNo = new Boolean(parseInt(e.target.form.yesOrNo.value));
            e.target.form.yesQuestion.disabled = yesOrNo.valueOf();
        }
    });
});

