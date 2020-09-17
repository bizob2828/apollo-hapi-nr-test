module.exports = {
  Query: {
    asteroids: async (_, { date }, { dataSources }) => 
      await dataSources.asteroidAPI.getAsteroidsByDate(date)
  },
}