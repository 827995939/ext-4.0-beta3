/**
 * Macedonia translation
 * By PetarD petar.dimitrijevic@vorteksed.com.mk (utf8 encoding)
 * 23 April 2007
 */
Ext.onReady(function() {
    if(Ext.Updater) {
        Ext.Updater.defaults.indicatorText = '<div class="loading-indicator">Вчитувам...</div>';
    }

    if(Ext.DataView){
        Ext.DataView.prototype.emptyText = "";
    }

    if(Ext.grid.Panel){
        Ext.grid.Panel.prototype.ddText = "{0} избрани редици";
    }

    if(Ext.TabPanelItem){
        Ext.TabPanelItem.prototype.closeText = "Затвори tab";
    }

    if(Ext.form.field.Base){
        Ext.form.field.Base.prototype.invalidText = "Вредноста во ова поле е невалидна";
    }

    if(Ext.LoadMask){
        Ext.LoadMask.prototype.msg = "Вчитувам...";
    }
    
    if(Ext.Date){
        Ext.Date.monthNames = [
        "Јануари",
        "Февруари",
        "Март",
        "Април",
        "Мај",
        "Јуни",
        "Јули",
        "Август",
        "Септември",
        "Октомври",
        "Ноември",
        "Декември"
        ];

        Ext.Date.dayNames = [
        "Недела",
        "Понеделник",
        "Вторник",
        "Среда",
        "Четврток",
        "Петок",
        "Сабота"
        ];
    }
    
    if(Ext.MessageBox){
        Ext.MessageBox.buttonText = {
            ok     : "Потврди",
            cancel : "Поништи",
            yes    : "Да",
            no     : "Не"
        };
    }

    if(Ext.util.Format){
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u0434\u0435\u043d',  // Macedonian Denar
            dateFormat: 'd.m.Y'
        });
    }

    if(Ext.picker.Date){
        Ext.apply(Ext.picker.Date.prototype, {
            todayText         : "Денеска",
            minText           : "Овој датум е пред најмалиот датум",
            maxText           : "Овој датум е пред најголемиот датум",
            disabledDaysText  : "",
            disabledDatesText : "",
            monthNames	: Ext.Date.monthNames,
            dayNames		: Ext.Date.dayNames,
            nextText          : 'Следен месец (Control+Стрелка десно)',
            prevText          : 'Претходен месец (Control+Стрелка лево)',
            monthYearText     : 'Изберете месец (Control+Стрелка горе/Стрелка десно за менување година)',
            todayTip          : "{0} (Spacebar)",
            format            : "d.m.y"
        });
    }

    if(Ext.toolbar.Paging){
        Ext.apply(Ext.PagingToolbar.prototype, {
            beforePageText : "Страница",
            afterPageText  : "од {0}",
            firstText      : "Прва Страница",
            prevText       : "Претходна Страница",
            nextText       : "Следна Страница",
            lastText       : "Последна Страница",
            refreshText    : "Освежи",
            displayMsg     : "Прикажувам {0} - {1} од {2}",
            emptyMsg       : 'Нема податоци за приказ'
        });
    }

    if(Ext.form.field.Text){
        Ext.apply(Ext.form.field.Text.prototype, {
            minLengthText : "Минималната должина за ова поле е {0}",
            maxLengthText : "Максималната должина за ова поле е {0}",
            blankText     : "Податоците во ова поле се потребни",
            regexText     : "",
            emptyText     : null
        });
    }

    if(Ext.form.field.Number){
        Ext.apply(Ext.form.field.Number.prototype, {
            minText : "Минималната вредност за ова поле е {0}",
            maxText : "Максималната вредност за ова поле е {0}",
            nanText : "{0} не е валиден број"
        });
    }

    if(Ext.form.field.Date){
        Ext.apply(Ext.form.field.Date.prototype, {
            disabledDaysText  : "Неактивно",
            disabledDatesText : "Неактивно",
            minText           : "Датумот во ова поле мора да биде пред {0}",
            maxText           : "Датумот во ова поле мора да биде по {0}",
            invalidText       : "{0} не е валиден датум - мора да биде во формат {1}",
            format            : "d.m.y"
        });
    }

    if(Ext.form.field.ComboBox){
        Ext.apply(Ext.form.field.ComboBox.prototype, {
            loadingText       : "Вчитувам...",
            valueNotFoundText : undefined
        });
    }

    if(Ext.form.field.VTypes){
        Ext.apply(Ext.form.field.VTypes, {
            emailText    : 'Ова поле треба да биде e-mail адреса во формат "user@example.com"',
            urlText      : 'Ова поле треба да биде URL во формат "http:/'+'/www.example.com"',
            alphaText    : 'Ова поле треба да содржи само букви и _',
            alphanumText : 'Ова поле треба да содржи само букви, бројки и _'
        });
    }

    if(Ext.grid.header.Container){
        Ext.apply(Ext.grid.header.Container.prototype, {
            sortAscText  : "Сортирај Растечки",
            sortDescText : "Сортирај Опаѓачки",
            lockText     : "Заклучи Колона",
            unlockText   : "Отклучи колона",
            columnsText  : "Колони"
        });
    }

    if(Ext.grid.PropertyColumnModel){
        Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
            nameText   : "Име",
            valueText  : "Вредност",
            dateFormat : "m.d.Y"
        });
    }

    if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
        Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
            splitTip            : "Повлечете за менување на големината.",
            collapsibleSplitTip : "Повлечете за менување на големината. Дупли клик за криење."
        });
    }
});