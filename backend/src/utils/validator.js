module.exports = {
	validateAll,
	validateOne
}

// Функция проверки соответствия полей заданной схеме
function validate(algorithm, scheme, data) {
	return scheme[algorithm]( item => {
		// Если поле передано
		if ( data[item.name] !== undefined ) {
			return typeof item.validator === "function" // если задан формат, проверяем
				? item.validator(data[item.name])
				: true
		}
		// Если нет, но поле опциональное
		else if ( !item.required ) return true;
	});
}

// Проверяет все поля по схеме
function validateAll(scheme, data) {
	return validate('every', scheme, data);
}

// Проверяет только одно поле (если нужно проверить единственное поле на соответствие схеме)
function validateOne (scheme, item) { 
	return validate('some', scheme, item);
}

