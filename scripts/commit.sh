#!/bin/bash

# =============================================================================
# Création d'un commit formaté à partir de la branche courante
# Usage: ./scripts/commit.sh <theme> <description>
# Exemple: ./scripts/commit.sh Config "Mise en place de la configuration"
#
# Si la branche est feat/T-01, le commit sera :
#   feat(Config): T-01 Mise en place de la configuration
# =============================================================================

THEME="$1"
shift
DESCRIPTION="$*"

# --- Validation des arguments ---
if [ -z "$THEME" ] || [ -z "$DESCRIPTION" ]; then
  echo "❌ Usage: ./run commit <theme> <description>"
  echo "   Exemple: ./run commit Config \"Mise en place de la configuration\""
  exit 1
fi

# --- Récupérer la branche courante ---
BRANCH=$(git branch --show-current)

if [ -z "$BRANCH" ]; then
  echo "❌ Impossible de déterminer la branche courante (HEAD détaché ?)."
  exit 1
fi

# --- Parser le type et le ticket depuis la branche ---
# Format attendu : type/T-XX (ex: feat/T-01, fix/T-12, hotfix/T-03)
if [[ "$BRANCH" =~ ^([a-z]+)/T-([0-9]+)$ ]]; then
  TYPE="${BASH_REMATCH[1]}"
  TICKET="T-${BASH_REMATCH[2]}"
else
  echo "⚠️  Branche '${BRANCH}' non conforme au format type/T-XX."
  echo "   Le commit sera créé sans ticket ID."
  # Fallback : essayer de parser au moins le type
  TYPE=$(echo "$BRANCH" | cut -d'/' -f1)
  TICKET=""
fi

# --- Construire le message de commit ---
if [ -n "$TICKET" ]; then
  COMMIT_MSG="${TYPE}(${THEME}): ${TICKET} ${DESCRIPTION}"
else
  COMMIT_MSG="${TYPE}(${THEME}): ${DESCRIPTION}"
fi

echo "📝 Message de commit :"
echo "   ${COMMIT_MSG}"
echo ""

# --- Stage all + commit ---
git add -A
git commit -m "${COMMIT_MSG}"

echo ""
echo "✅ Commit créé avec succès."
