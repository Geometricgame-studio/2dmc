const ITEM_DATA = {
    // 方塊
    'stone': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 3,
        drops: 'cobblestone', // 簡化為單一字串
        displayName: 'Stone',
        harvestTool: 'pickaxe',
        minToolLevel: 1
    },
    'dirt': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 1,
        drops: 'dirt',
        displayName: 'Dirt',
        harvestTool: 'shovel',
        minToolLevel: 0
    },
    'cobblestone': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 2.5,
        drops: 'cobblestone',
        displayName: 'Cobblestone',
        harvestTool: 'pickaxe',
        minToolLevel: 1
    },
    'deepslate': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 2.5,
        drops: 'cobbled_deepslate',
        displayName: 'Deepslate',
        harvestTool: 'pickaxe',
        minToolLevel: 1
    },
    'cobbled_deepslate': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 2.5,
        drops: 'cobbled_deepslate',
        displayName: 'Cobbled Deepslate',
        harvestTool: 'pickaxe',
        minToolLevel: 1
    },
    'grass_block': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 1,
        drops: 'dirt',
        displayName: 'Grass Block',
        harvestTool: 'shovel',
        minToolLevel: 0
    },
    'sand': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 0.7,
        drops: 'sand',
        displayName: 'Sand',
        harvestTool: 'shovel',
        minToolLevel: 0,
        hasGravity: true
    },
    'gravel': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 0.7,
        drops: 'gravel',
        displayName: 'Gravel',
        harvestTool: 'shovel',
        minToolLevel: 0,
        hasGravity: true
    },
    'bedrock': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: false,
        breakTime: Infinity,
        drops: null, // 基岩不會掉落任何東西
        displayName: 'Bedrock',
        harvestTool: null,
        minToolLevel: Infinity,
        hasGravity: false
    },
    'oak_log': {
        isSolid: false,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 2,
        drops: 'oak_log',
        displayName: 'Oak Log',
        harvestTool: 'axe',
        minToolLevel: 0
    },
    'oak_leaves': {
        isSolid: false,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 0.2,
        drops: 'oak_leaves',
        displayName: 'Oak Leaves',
        harvestTool: 'shears',
        minToolLevel: 0
    },
    'oak_planks': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 2,
        drops: 'oak_planks',
        displayName: 'Oak Planks',
        harvestTool: 'axe',
        minToolLevel: 0
    },
    'crafting_table': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 2,
        drops: 'crafting_table',
        displayName: 'Crafting Table',
        harvestTool: 'axe',
        minToolLevel: 0
    },
    'coal_ore': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 3,
        drops: 'coal',
        displayName: 'Coal Ore',
        harvestTool: 'pickaxe',
        minToolLevel: 1
    },
    'iron_ore': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 4,
        drops: 'iron_ore',
        displayName: 'Iron Ore',
        harvestTool: 'pickaxe',
        minToolLevel: 2
    },
    'diamond_ore': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 5,
        drops: 'diamond',
        displayName: 'Diamond Ore',
        harvestTool: 'pickaxe',
        minToolLevel: 3
    },
    'coal_block': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 5,
        drops: 'coal_block',
        displayName: 'Block of Coal',
        harvestTool: 'pickaxe',
        minToolLevel: 0
    },
    'fire': {
        isSolid: false,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 0,
        drops: null,
        displayName: 'Fire',
        minToolLevel: 0,
        isAnimated: true,
        animationFrames: 32
    },
    'missing_texture': {
        isSolid: true,
        isTool: false,
        isBlock: true,
        isPlaceable: true,
        breakTime: 0,
        drops: 'missing_texture',
        displayName: 'Missing Texture debug block'
    },

    // 工具
    'wooden_pickaxe': {
        isSolid: false,
        isTool: true,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Wooden Pickaxe',
        toolType: 'pickaxe',
        toolLevel: 1
    },
    'wooden_axe': {
        isSolid: false,
        isTool: true,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Wooden Axe',
        toolType: 'axe',
        toolLevel: 1
    },
    'wooden_shovel': {
        isSolid: false,
        isTool: true,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Wooden Shovel',
        toolType: 'shovel',
        toolLevel: 1
    },
    'stone_pickaxe': {
        isSolid: false,
        isTool: true,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Stone Pickaxe',
        toolType: 'pickaxe',
        toolLevel: 2
    },
    'stone_axe': {
        isSolid: false,
        isTool: true,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Stone Axe',
        toolType: 'axe',
        toolLevel: 2
    },
    'stone_shovel': {
        isSolid: false,
        isTool: true,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Stone Shovel',
        toolType: 'shovel',
        toolLevel: 2
    },
    'iron_pickaxe': {
        isSolid: false,
        isTool: true,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Iron Pickaxe',
        toolType: 'pickaxe',
        toolLevel: 3
    },
    'iron_axe': {
        isSolid: false,
        isTool: true,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Iron Axe',
        toolType: 'axe',
        toolLevel: 3
    },
    'iron_shovel': {
        isSolid: false,
        isTool: true,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Iron Shovel',
        toolType: 'shovel',
        toolLevel: 3
    },
    // ... 其他工具和物品 ...
    'stick': {
        isSolid: false,
        isTool: false,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Stick'
    },
    'coal': {
        isSolid: false,
        isTool: false,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Coal'
    },
    'flint': {
        isSolid: false,
        isTool: false,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Flint'
    },
    'iron_ingot': {
        isSolid: false,
        isTool: false,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Iron Ingot'
    },
    'diamond': {
        isSolid: false,
        isTool: false,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Diamond'
    },
    'flint_and_steel': {
        isSolid: false,
        isTool: true,
        isBlock: false,
        isPlaceable: false,
        displayName: 'Flint and Steel'
    }
};