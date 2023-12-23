import s from './AttemptsList.module.css'

export default function Attempts({attempts, setAttempts}){

	function formatNumberCard(number){
		
		return number.slice(0,4) + ' ' + number.slice(4,8) + ' ' + number.slice(8,12)+ ' ' + number.slice(12)
	}
	return(
		<div className={s.wrapper}>
			
			<table className={s.tableAttempts}>
				<tr>
				<th>Name</th>
				<th>Card number</th>
				<th>Date expipe</th>
				<th>Code</th>
				</tr>
				{attempts.map(el => (
					<tr key={el.id}>
						<td name='holder'>{el.holder}</td>
						<td name='number'>{formatNumberCard(el.number)}</td>
						<td name='date'>{el.month}/{el.year}</td>
						<td name='cvc'>**{el.cvc[2]}</td>
					</tr>
				))}
				
				
			</table>
		</div>
	)
}