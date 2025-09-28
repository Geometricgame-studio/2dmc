// soft_recipes (非定型配方)
const soft_recipes = [
    {
        input: [
            { type: 'coal', count: 1 },
            { type: 'stick', count: 1 }
        ],
        output: { type: 'torch', count: 4 }
    },
    {
        input: [
            { type: 'oak_log', count: 1 },
        ],
        output: { type: 'oak_planks', count: 4 }
    },
    {
        input: [
            { type: 'oak_planks', count: 1 },
            { type: 'oak_planks', count: 1 },
            { type: 'oak_planks', count: 1 },
            { type: 'oak_planks', count: 1 },
        ],
        output: { type: 'crafting_table', count: 1 }
    },
    {
        input: [
            { type: 'oak_planks', count: 1 },
            { type: 'oak_planks', count: 1 },
        ],
        output: { type: 'stick', count: 2 }
    },
    {
        input: [
            { type: 'flint', count: 1 },
            { type: 'iron_ingot', count: 1 }
        ],
        output: { type: 'flint_and_steel', count: 1 }
    },
    {
        input: [
            { type: 'coal', count: 1 },
            { type: 'coal', count: 1 },
            { type: 'coal', count: 1 },
            { type: 'coal', count: 1 },
            { type: 'coal', count: 1 },
            { type: 'coal', count: 1 },
            { type: 'coal', count: 1 },
            { type: 'coal', count: 1 },
            { type: 'coal', count: 1 },
        ],
        output: { type: 'coal_block', count: 1 }
    }
];

// recipes (定型配方)
const recipes = [
    {
        input: [
            ['oak_planks', 'oak_planks',  'oak_planks'],
            [null, 'stick', null],
            [null, 'stick', null]
        ],
        output: { type: 'wooden_pickaxe', count: 1 }
    },
    {
        input: [
            ['oak_planks', 'oak_planks',  null],
            ['oak_planks', 'stick', null],
            [null, 'stick', null]
        ],
        output: { type: 'wodden_axe', count: 1 }
    },
    {
        input: [
            [null, 'oak_planks',  null],
            [null, 'stick', null],
            [null, 'stick', null]
        ],
        output: { type: 'wooden_shovel', count: 1 }
    },
    {
        input: [
            ['stone', 'stone',  'stone'],
            [null, 'stick', null],
            [null, 'stick', null]
        ],
        output: { type: 'stone_pickaxe', count: 1 }
    },
    {
        input: [
            ['stone', 'stone',  null],
            ['stone', 'stick', null],
            [null, 'stick', null]
        ],
        output: { type: 'stone_axe', count: 1 }
    },
    {
        input: [
            [null, 'stone',  null],
            [null, 'stick', null],
            [null, 'stick', null]
        ],
        output: { type: 'stone_shovel', count: 1 }
    },
];