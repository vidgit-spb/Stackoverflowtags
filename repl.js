global.clearModule = module => delete require.cache[require.resolve(module)];
