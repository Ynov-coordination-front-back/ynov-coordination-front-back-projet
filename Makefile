.PHONY: install dev dev-front dev-back build lint clean

# --- Dépendances ---
install:
	cd front && npm install
	cd back && npm install

# --- Développement ---
dev:
	@echo "🚀 Lancement du front et du back en parallèle..."
	$(MAKE) dev-front & $(MAKE) dev-back & wait

dev-front:
	cd front && npm run dev

dev-back:
	cd back && npm run dev

# --- Build ---
build:
	cd front && npm run build
	cd back && npm run build

# --- Lint ---
lint:
	cd front && npm run lint
	cd back && npm run lint

# --- Nettoyage ---
clean:
	rm -rf front/node_modules
	rm -rf back/node_modules
