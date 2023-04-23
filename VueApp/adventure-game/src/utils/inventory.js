const INVENTORY_KEY = "adventure_game_inventory";

export function addItemToInventory(item) {
  const inventory = getInventory();
  inventory.push(item);
  saveInventory(inventory);
}

export function removeItemFromInventory(item) {
  const inventory = getInventory();
  const index = inventory.indexOf(item);
  if (index !== -1) {
    inventory.splice(index, 1);
    saveInventory(inventory);
  }
}

export function hasItemInInventory(item) {
  const inventory = getInventory();
  return inventory.includes(item);
}

export function getInventory() {
  const inventory = JSON.parse(sessionStorage.getItem(INVENTORY_KEY));
  return inventory ? inventory : [];
}

function saveInventory(inventory) {
  sessionStorage.setItem(INVENTORY_KEY, JSON.stringify(inventory));
}