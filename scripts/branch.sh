#!/bin/bash

# =============================================================================
# Création d'une branche au format : type/T-id
# Usage: ./scripts/branch.sh <type> <id>
# Exemple: ./scripts/branch.sh feat 01 → feat/T-01
# =============================================================================

TYPE="$1"
ID="$2"

# --- Validation des arguments ---
if [ -z "$TYPE" ] || [ -z "$ID" ]; then
  echo "❌ Usage: ./run branch <type> <id>"
  echo "   Exemple: ./run branch feat 01"
  exit 1
fi

# --- Validation du type ---
VALID_TYPES=("feat" "fix" "hotfix")
if [[ ! " ${VALID_TYPES[*]} " =~ " ${TYPE} " ]]; then
  echo "❌ Type invalide: '$TYPE'"
  echo "   Types autorisés: ${VALID_TYPES[*]}"
  exit 1
fi

BRANCH_NAME="${TYPE}/T-${ID}"

# --- Vérifier si la branche existe déjà ---
if git show-ref --verify --quiet "refs/heads/${BRANCH_NAME}"; then
  echo "⚠️  La branche '${BRANCH_NAME}' existe déjà. Checkout..."
  git checkout "${BRANCH_NAME}"
  exit 0
fi

# --- Créer la branche depuis develop (ou main pour hotfix) ---
if [ "$TYPE" = "hotfix" ]; then
  BASE="main"
else
  BASE="develop"
fi

echo "🌿 Création de la branche '${BRANCH_NAME}' depuis '${BASE}'..."
git checkout "$BASE" 2>/dev/null || { echo "❌ Impossible de checkout '$BASE'. Vérifiez qu'elle existe."; exit 1; }
git pull origin "$BASE" 2>/dev/null
git checkout -b "${BRANCH_NAME}"

echo "✅ Branche '${BRANCH_NAME}' créée et checkoutée."
