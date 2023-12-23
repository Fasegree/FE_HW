import s from './PayCard.module.css'
import logo from './media/Logo.png'
import visa_master from './media/vizza_master.svg'
import { useForm } from 'react-hook-form'

export default function PayCard({attempts,setAttempts}){
	// const []
	let {register, 
		handleSubmit, 
		formState: {errors},
		reset
	} = useForm()

	let onSubmit = (data) => {
		// console.log(errors);
		let {holder, number, month, year, cvc} = data
		if(isDateValid(month,year)){
			console.log('not problem');
			data.id = Date.now()
			// приведение строки к нижнему регистру
			holder = holder.toLowerCase()
			// убирает лишние пробелы
			holder = holder.split(' ').filter(Boolean).join(' ')
			// Большие первые буквы слов
			data.holder = holder[0].toUpperCase() + holder.slice(1,holder.indexOf(' ')) +' ' + holder[holder.indexOf(' ')+1].toUpperCase() + holder.slice(holder.indexOf(' ')+2)

			setAttempts([...attempts, data])
				reset();
				console.log(data);
				console.log(attempts);
		} else {
			console.log('problem');
		}


	}

	// валидация текущей даты
	function isDateValid(month, year){
		const currentYear = new Date().getFullYear() % 100
		const currentMonth = new Date().getMonth()+1 
		console.log(year-currentYear, month-currentMonth);
		
		return !(year-currentYear <= 0 && month-currentMonth <= 0)
	}
	
	let holder = register('holder', {
		required: 'Required',
		minLength: {
			value: 3,
			message: 'Минимальная длинна имени - 3 символа'
		},
		pattern: {
			value: /^\D+\s+\D+$/,
			message: 'Invalid'
		}
	})

	let number = register('number', {
		required: 'Required',
		minLength: {
			value: 16,
			message: 'Длина номера карточки должна быть 16 цифр'
		},
		pattern: {
			value: /^[45]\d{15}$/,
			message: 'Начинаться должна с 4 или 5'
		}
	})

	let month = register('month',{
		required: {
			value: 2,
			message: 'Required'
		},
		pattern: {
			value: /^(1[0-2]|[1-9])$/,
			message: 'Invalid'
		}
	});
	let year = register('year', {
		required: {
			value: 2,
			message: 'Required'
		},
		pattern: {
			value: /^[0-9]{2}$/,
		}
	});
	let cvc = register('cvc',{
		required:{
			value: 3,
			message: 'Required'

		},
		minLength: {
			value:3,
			message: 'Invalid'
		},
	  pattern: {
			value: /^[0-9]{3}$/,
			message: 'Invalid'
		}
	},
	);
	function isErrorStyle(style, isError){
		return (style && isError) ? style : `${style} ${s.isError}`
	}
	
	
	return(
		<form onSubmit={handleSubmit(onSubmit)} className={s.formContain} action="">

		<div className={s.cards}>
			<div className={s.frontCard}>
				<div className={s.frontCardContent}>

				<div className={s.frontCardTop}>
					<input 
						{...holder} 
						className={errors.holder && s.isError} // проверить переписать на {s.holderCard && s.isError} {( errors.holder) ? `${s.holderCard} ${s.isError}` : s.holderCard }
						placeholder='Holder of card' 
						type="text" 
					/>
					{errors.holder && <p className={s.errorHolder}>{errors.holder.message}</p>}
					<input 
						{...number} 
						className= {errors.number && s.isError}//{( errors.number) ? `${s.numberCard} ${s.isError}` : s.numberCard }
						placeholder='Number of card'
						 type="text" 
						 maxLength={16}
					/>
					{errors.number &&  <p className={s.errorNumber}>{errors.number.message}</p>}
				</div>
				<p className={s.valid}>VALID THRU</p>
				<div className={s.frontCardBottom}>
					<input
					 {...month} 
					 className= {( errors.month) ? `${s.month} ${s.isError}` : s.month }
					 placeholder='MM' 
					 type="text" 
					 maxLength={2} 
					/>
					{errors.month &&  <p className={s.errorMonth}>{errors.month.message}</p>}
					<span className={s.slash}>/</span>
					<input 
						{...year} 
						className= {( errors.year) ? `${s.year} ${s.isError}` : s.year }
						placeholder='YY' 
						type="text" 
						maxLength={2} 
					/>
					{errors.year &&  <p className={s.errorYear}>{errors.year.message}</p>}
					<img src={visa_master} alt="visa/mastercard" />
				</div>
				</div>
				
			</div>

			<div className={s.backCard}>
				<div className={s.backCardContent}>

					<div className={s.magnetStr}></div>
					<input 
						{...cvc} 
						className= {( errors.cvc) ? `${s.cvc} ${s.isError}` : s.cvc }
						type="password" 
						placeholder='CVC'
						maxLength={3}
						
					/>
					{errors.cvc &&  <p className={s.errorCVC}>{errors.cvc.message}</p>}
				</div>
			</div>
		</div>
				<img className={s.logo} src={logo}/>
		<button className={s.sendBtn}>Send</button>
		{/* <input type='submit' className={s.sendBtn} value='Send'/> */}
		</form>
	)
}