export const getCategories = data => [
  { name: 'Ouvriers', details: data.details.workers },
  { name: 'Employés', details: data.details.employees },
  {
    name: 'Techniciens et agents de maîtrise',
    details: data.details.technicians,
  },
  { name: 'Ingénieurs et cadres', details: data.details.engineers },
  {
    name: 'Ensemble des salariés',
    details: data.details.total,
  },
]

export const getDetailsKey = indicatorNumber => {
  if (indicatorNumber.match(/indicator1/)) {
    return [
      'annualSalary',
      'delta',
      'deltaTreshold',
      'headcount',
      'validGroup',
      'validStaff',
      'deltaTotal',
    ]
  }
  if (indicatorNumber.match(/indicator2/)) {
    return [
      'payRiseRate',
      'delta',
      'headcount',
      'validGroup',
      'validStaff',
      'deltaTotal',
    ]
  } else if (indicatorNumber.match(/indicator3/)) {
    return [
      'promotionRate',
      'delta',
      'headcount',
      'validGroup',
      'validStaff',
      'deltaTotal',
    ]
  } else if (indicatorNumber.match(/indicator4/)) {
    return ['MaternityLeave', 'deltaTotal']
  } else if (indicatorNumber.match(/indicator5/)) {
    return ['top10', 'deltaTotal']
  }
  return []
}

export const generateUID = (
  index,
  cat1,
  cat2 = 'nocat2',
  cat3 = 'nocat3',
  cat4 = 'nocat4',
) => `${cat1}_${cat2}_${cat3}_${cat4}_${index}`
