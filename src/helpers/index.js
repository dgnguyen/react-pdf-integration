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

//Clean that later
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
  } else if (indicatorNumber.match(/indicator4/)) {
    return ['MaternityLeave', 'deltaTotal']
  } else if (indicatorNumber.match(/indicator5/)) {
    return ['top10', 'deltaTotal']
  }
  return []
}

export const getEmployeesListKey = indicatorNumber => {
  const commonKeys = ['NIR', 'Matricule', 'Nom', 'Prénom']
  if (indicatorNumber.match(/indicator4/)) {
    return [...commonKeys, 'Date retour', 'Augmentation']
  }
  return commonKeys
}

export const generateUID = (
  index,
  cat1,
  cat2 = 'nocat2',
  cat3 = 'nocat3',
  cat4 = 'nocat4',
) => `${cat1}_${cat2}_${cat3}_${cat4}_${index}`
