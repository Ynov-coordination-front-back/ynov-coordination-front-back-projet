.PHONY: install dev dev-front dev-back build lint clean branch commit

install:
	cd front && npm install
	cd back && npm install

dev:
	@echo "🚀 Lancement du front et du back en parallèle..."
	$(MAKE) dev-front & $(MAKE) dev-back & wait

dev-front:
	cd front && npm run dev

dev-back:
	cd back && npm run dev

build:
	cd front && npm run build
	cd back && npm run build

lint:
	cd front && npm run lint
	cd back && npm run lint

clean:
	rm -rf front/node_modules
	rm -rf back/node_modules

branch:
	@./scripts/branch.sh $(type) $(id)

commit:
	@./scripts/commit.sh $(theme) $(msg)
