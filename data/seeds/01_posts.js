
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, 
        name: 'Ben Johnson',
        bio: 'Canadian Athlete. Married to Mary Pent'
      },
        {id: 2,
          name: 'Mohammed Alli',
          bio: 'Boxer. Married to Aisha'
        },

        {id: 3,
          name: 'George Weah',
          bio: 'Former Footballer and now President of Liberia'
        }
      ]);
    });
};
