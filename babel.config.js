const originPlugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread'
]

if (process.env.NODE_ENV === 'production') {
  originPlugins.push([
    'transform-remove-console',
    {
      exclude: ['error', 'warn']
    }
  ])
}

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs'
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: originPlugins
}
